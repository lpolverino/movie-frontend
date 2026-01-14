import type { Cinema } from "$lib/types/cinemas";
import { PUBLIC_API_URL } from '$env/static/public';
import { error, isHttpError } from '@sveltejs/kit';
import { MovieSchema } from "$lib/types/movies.js";
import { ScreeningsSchema } from "$lib/types/screenings.js";
import type { ZodArray, ZodObject } from "zod";

async function extractJson(res:Response, errorMessage:string, schema:ZodArray|ZodObject){
    if(!res.ok){
        throw error(res.status, errorMessage)
    }

    const data = await res.json()
    const parsedData = schema.safeParse(data);

    if(!parsedData.success){
        console.error(parsedData.error);
        throw error(500, 'Invalid API response');
    }

    return parsedData;
}


export async function load({fetch, params, locals}) {
    let screeningsRes:Response;
    let movieRes:Response;
    const cinema:Cinema = locals.cinema;

    try{
        movieRes = await fetch(`${PUBLIC_API_URL}/movies/${params.movie}`);
        const movie = await extractJson(movieRes,"Error loading movies", MovieSchema);

        if (!cinema) {
            return {
                movie, 
                screenings: [], 
            };
        }
        
        screeningsRes = await fetch(`${PUBLIC_API_URL}/movies/${params.movie}/cinemas/${cinema.id}/functions`);
        
        const screenings = await extractJson(screeningsRes, "Error loading screenings", ScreeningsSchema)

        return {
            movie,
            screenings
        }

    }catch(err){
        console.error(err);
        if(isHttpError(err)){
            throw error(err.status||502, err.body.message||'Cannot stablish a connection with the server');
        }
    }
}