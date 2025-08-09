import { z } from "zod";

export const createTermZodSchema = z.object({
    title: z.string(),
})
