import { PUBLIC_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';
import { BillboardMoviesSchema } from '$lib/types/movies.js';

export async function load({ fetch }) {
    let res:Response;
    try{
        res = await fetch(`${PUBLIC_API_URL}/movies`); 
    }catch(err){
        console.error(err);
        throw error(502, 'Cannot stablish a connection with the server');
    }

    if (!res.ok) {
        throw error(res.status, 'Error loading billboard movies');
    }

    const json = await res.json();

    console.log(json);
    
    const parsed = BillboardMoviesSchema.safeParse(json);

    if(!parsed.success){
        console.error(parsed.error);
        throw error(500, 'Invalid API response');
    }

    return {
        billboardMovies: parsed.data
    }
}

