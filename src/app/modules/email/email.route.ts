import { Router } from "express";
import { emailController } from "./email.controller";

const router = Router()


router.post("/", emailController.handleContactForm)

export const contactRoute = router