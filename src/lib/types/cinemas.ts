import {z} from 'zod';

export const CinemaSchema = z.object({
    id:z.number(),
    name: z.string(),
    address: z.string(),
    movie_theaters: z.array(z.object({
       movie_theater_type: z.object({
            name: z.string()
       }) 
    }))
});

export const CinemasSchema = z.array(CinemaSchema);

export type Cinema = z.infer<typeof CinemaSchema>;

