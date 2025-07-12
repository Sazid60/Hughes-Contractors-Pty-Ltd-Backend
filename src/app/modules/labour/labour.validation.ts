import { z } from "zod";

export const createLabourZodSchema = z.object({
    jobType: z.string({
        error: (issue) =>
            issue.input === undefined ? "Job type is required" : "Invalid job type",
    }),

    perHourRate: z.number({
        error: (issue) =>
            issue.input === undefined ? "Per hour rate is required" : "Invalid per hour rate",
    }).min(0, { message: "Per hour rate must be a positive number" }),

    minHour: z.number({
        error: (issue) =>
            issue.input === undefined ? "Minimum hour is required" : "Invalid minimum hour",
    }).min(1, { message: "Minimum hour must be at least 1" }),
});

// For update, all fields optional
export const updateLabourZodSchema = z.object({
    jobType: z.string({ error: () => "Invalid job type" }).optional(),

    perHourRate: z.number({ error: () => "Invalid per hour rate" })
        .min(0, { message: "Per hour rate must be a positive number" })
        .optional(),

    minHour: z.number({ error: () => "Invalid minimum hour" })
        .min(1, { message: "Minimum hour must be at least 1" })
        .optional(),
});
