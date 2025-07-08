// controllers/email.controller.ts
import nodemailer from "nodemailer";
import { Request, Response } from "express";

export const handleContactForm = async (req: Request, res: Response) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // Send email to admin
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Inquiry from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #ff5c00;">New Inquiry Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>

          <hr style="margin: 20px 0;" />
          <p style="color: #555;">
            This message was sent via the contact form on the Hughes Contractors Pty Ltd website.
          </p>
        </div>
      `,
        });

        // Auto-response to user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank You for Contacting Hughes Contractors Pty Ltd",
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
          <h2 style="color: #ff5c00;">Hi ${name},</h2>

          <p>Thank you for reaching out to <strong>Hughes Contractors Pty Ltd</strong>. We’ve received your message and one of our team members will get back to you as soon as possible.</p>

          <p>We specialize in services such as:</p>
          <ul>
            <li>Civil Construction</li>
            <li> Plant Decommissioning</li>
            <li>Demolition Consultation & Execution</li>
            <li>Early Work Constructing</li>
            <li>Renewable Energy Project Support</li>
          </ul>

          <p>With a strong reputation for safety, reliability, and project excellence, we are committed to offering you the best possible solution tailored to your needs.</p>

          <p>Feel free to explore more about us or get in touch if you have additional questions.</p>

          <p style="margin-top: 24px;">Warm regards,<br />
          <strong>Team Hughes Contractors Pty Ltd</strong><br />
          Botany, NSW<br />
          <a href="mailto:${process.env.EMAIL_USER}" style="color: #ff5c00;">${process.env.EMAIL_USER}</a>
          </p>
        </div>
      `,
        });

        res.status(200).json({ message: "Message sent successfully." });
    } catch (error) {
        console.error("Email send error:", error);
        res.status(500).json({ message: "Failed to send message", error });
    }
};
