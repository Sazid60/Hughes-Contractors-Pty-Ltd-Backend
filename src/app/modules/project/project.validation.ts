import { z } from "zod";

export const createProjectZodSchema = z.object({
    projectImage: z.string({
        error: (issue) =>
            issue.input === undefined ? "Project image is required" : "Invalid project image",
    }),

    title: z.string({
        error: (issue) =>
            issue.input === undefined ? "Title is required" : "Invalid title",
    }),

    client: z.string({
        error: (issue) =>
            issue.input === undefined ? "Client is required" : "Invalid client",
    }),

    location: z.string({
        error: (issue) =>
            issue.input === undefined ? "Location is required" : "Invalid location",
    }),

    projectYear: z.string({
        error: (issue) =>
            issue.input === undefined ? "Project year is required" : "Invalid project year",
    }),

    duration: z.string({
        error: (issue) =>
            issue.input === undefined ? "Duration is required" : "Invalid duration",
    }),

    description: z.string({
        error: (issue) =>
            issue.input === undefined ? "Description is required" : "Invalid description",
    }),
});



export const updateProjectZodSchema = z.object({
    projectImage: z
        .string({
            error: () => "Invalid project image",
        })
        .optional(),

    title: z
        .string({
            error: () => "Invalid title",
        })
        .optional(),

    client: z
        .string({
            error: () => "Invalid client",
        })
        .optional(),

    location: z
        .string({
            error: () => "Invalid location",
        })
        .optional(),

    projectYear: z
        .string({
            error: () => "Invalid project year",
        })
        .optional(),

    duration: z
        .string({
            error: () => "Invalid duration",
        })
        .optional(),

    description: z
        .string({
            error: () => "Invalid description",
        })
        .optional(),
});
