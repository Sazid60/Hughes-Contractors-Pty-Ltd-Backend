import { z } from "zod";

// CREATE: All required
export const createEquipmentZodSchema = z.object({
    name: z.string({
        error: (issue) =>
            issue.input === undefined ? "Equipment name is required" : "Invalid name",
    }),

    equipmentImage: z.string({
        error: (issue) =>
            issue.input === undefined ? "Equipment image is required" : "Invalid image",
    }),

    hourlyRate: z.number({
        error: (issue) =>
            issue.input === undefined ? "Hourly rate is required" : "Invalid hourly rate",
    }).min(0, { message: "Hourly rate must be a positive number" }),

    minHour: z.number({
        error: (issue) =>
            issue.input === undefined ? "Minimum hour is required" : "Invalid minimum hour",
    }).min(1, { message: "Minimum hour must be at least 1" }),

    floatCharge: z.number({
        error: (issue) =>
            issue.input === undefined ? "Float charge is required" : "Invalid float charge",
    }).min(0, { message: "Float charge must be a positive number" }),
    description: z.string({
        error: (issue) =>
            issue.input === undefined ? "Description is required" : "Invalid description",
    }),
});

// UPDATE: All optional but still validated if present
export const updateEquipmentZodSchema = z.object({
    name: z.string({
        error: (issue) =>
            issue.input === undefined ? "Equipment name is required" : "Invalid name",
    }).optional(),

    equipmentImage: z.string({
        error: (issue) =>
            issue.input === undefined ? "Equipment image is required" : "Invalid image",
    }).optional(),

    hourlyRate: z.number({
        error: (issue) =>
            issue.input === undefined ? "Hourly rate is required" : "Invalid hourly rate",
    })
        .min(0, { message: "Hourly rate must be a positive number" })
        .optional(),

    minHour: z.number({
        error: (issue) =>
            issue.input === undefined ? "Minimum hour is required" : "Invalid minimum hour",
    })
        .min(1, { message: "Minimum hour must be at least 1" })
        .optional(),

    floatCharge: z.number({
        error: (issue) =>
            issue.input === undefined ? "Float charge is required" : "Invalid float charge",
    })
        .min(0, { message: "Float charge must be a positive number" })
        .optional(),
    description: z
        .string({
            error: () => "Invalid description",
        })
        .optional(),
});
