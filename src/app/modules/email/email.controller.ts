import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";

import httpStatus from "http-status-codes";
import { emailService } from "./email.service";
import { sendResponse } from "../../utils/sendResponse";


const handleContactForm = catchAsync(
    async (req: Request, res: Response) => {
        const { name, email, message } = req.body;

        await emailService.sendContactFormEmails({ name, email, message });

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Message sent successfully.",
            data: null, // or {}
        });

    }
);

export const emailController = {
    handleContactForm,
};
