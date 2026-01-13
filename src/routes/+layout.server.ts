import { PUBLIC_API_URL } from '$env/static/public';
import { CinemasSchema } from '$lib/types/cinemas.js';
import { error } from '@sveltejs/kit';

export const load = async ({fetch}) => {

    let res: Response;
    try{
        res = await fetch(`${PUBLIC_API_URL}/cinemas`); 
    }catch(err){
        console.error(err);
        throw error(502, 'Cannot stablish a connection with the server');
    }

    if (!res.ok) {
        throw error(res.status, 'Error loading Cinemas');
    }

    const json = await res.json();

    console.log(json);
    
    const parsed = CinemasSchema.safeParse(json);

    if(!parsed.success){
        console.error(parsed.error);
        throw error(500, 'Invalid API response');
    }

    return {
        cinema: parsed.data
    }
}