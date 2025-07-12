import { z } from "zod";

export const createUserZodSchema = z.object({
    name: z.string({
        error: (issue) =>
            issue.input === undefined ? "Name is required" : "Name must be a string",
    })
        .min(2, { error: "Name must be at least 2 characters long." })
        .max(50, { error: "Name cannot exceed 50 characters." }),

    email: z.email({
        error: (issue) =>
            issue.input === undefined ? "Email is required" : "Invalid email address format.",
    }),

    password: z.string({
        error: (issue) =>
            issue.input === undefined ? "Password is required" : "Password must be a string",
    })
        .min(8, { error: "Password must be at least 8 characters long." })
        .refine((val) => /[A-Z]/.test(val), {
            error: "Password must contain at least 1 uppercase letter.",
        })
        .refine((val) => /[!@#$%^&*]/.test(val), {
            error: "Password must contain at least 1 special character.",
        })
        .refine((val) => /\d/.test(val), {
            error: "Password must contain at least 1 number.",
        }),
});