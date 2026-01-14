import {z} from 'zod'

export const ScreeningSchema = z.object({
    id: z.number(),
    movieId: z.number(),
    movie_theaterId: z.number(),
    hour: z.string(),
    available_tickets: z.number(),
})

export const ScreeningsSchema = z.array(ScreeningSchema);

export type Screening = z.infer<typeof ScreeningSchema>
export type Screenings = z.infer<typeof ScreeningsSchema>
