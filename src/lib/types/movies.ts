import {z} from 'zod';

export const BillboardMovieSchema = z.object({
    id:z.number(),
    title: z.string()
});

export const MovieSchema = z.object({
    id: z.number(),
    title: z.string(),
    lenguage:z.string(),
    description: z.string(),
    duration: z.number(),
    published_date:z.string(),
    distributor: z.string(),
    posterUrl:z.url(),
    trailerUrl:z.url(),
});

export type BillboardMovie = z.infer<typeof BillboardMovieSchema>;

export const BillboardMoviesSchema = z.array(BillboardMovieSchema);

export type Movie = z.infer<typeof MovieSchema>