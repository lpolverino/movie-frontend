import {z} from 'zod';

export const BillboardMovieSchema = z.object({
    id:z.number(),
    title: z.string()
});

export const BillboardMoviesSchema = z.array(BillboardMovieSchema);

export type BillboardMovie = z.infer<typeof BillboardMovieSchema>;