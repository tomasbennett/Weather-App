import { z } from "zod";

const TempTimeSeries = z.object({
    date: z.date(),
    temp: z.number()
});

const ScreenDataSchema = z.object({
    address: z.string().min(1),
    resolvedAddress: z.string().min(1),
    description: z.string().min(1),
    latitude: z.number(),
    longitude: z.number(),

    currentConditions: z.object({
        temp: z.number(),
        feelslike: z.number(),
        datetime: z.string(),
        precipprob: z.number().positive(),
        snow: z.number().positive(),
        snowdepth: z.number().positive()
    }),
    days: z.array(z.object({
        datetime: z.string().min(9),
        temp: z.number()
    }))

    // temp: z.number(),
    // minTemp: z.number(),
    // maxTemp: z.number(),
    // feelsLike: z.number(),
    // tempTimeSeries: z.array(TempTimeSeries)
});


export type IScreenData = z.infer<typeof ScreenDataSchema>;