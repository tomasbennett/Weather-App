import { z } from "zod";

const TempTimeSeries = z.object({
    datetime: z.string().min(9),
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
    days: z.array(TempTimeSeries)

    // temp: z.number(),
    // minTemp: z.number(),
    // maxTemp: z.number(),
    // feelsLike: z.number(),
    // tempTimeSeries: z.array(TempTimeSeries)
});

export type ITimeSeriesData = z.infer<typeof TempTimeSeries>;

export type IScreenData = z.infer<typeof ScreenDataSchema>;