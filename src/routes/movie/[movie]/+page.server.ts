import type { Cinema } from "$lib/types/cinemas";
import { PUBLIC_API_URL } from '$env/static/public';
import { error } from '@sveltejs/kit';

export async function load({fetch, params, locals}) {
    let res:Response;

    const cinema:Cinema = locals.cinema;

    console.log(cinema)

    if (!cinema) {
		return { 
            movies: [], 
        };
	}

    try{
        res = await fetch(`${PUBLIC_API_URL}/movies/${params.movie}/cinemas/${cinema.id}/functions`);
    }catch(err){
        console.error(err);
        throw error(502, 'Cannot stablish a connection with the server');
    }
    
    if (!res.ok) {
        throw error(res.status, 'Error loading Cinemas');
    }

    const json = await res.json();
    
    console.log({
        position:"movies/[movies]",
        json
    });

    return {
        movies:[]
    }
}