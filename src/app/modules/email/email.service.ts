import nodemailer from "nodemailer";
import { envVars } from "../../config/env";
import { IEmailMessage } from "./email.interface";


export const emailService = {
    sendContactFormEmails: async ({ name, email, message }: IEmailMessage) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: envVars.EMAIL_USER,
                pass: envVars.EMAIL_PASS,
            },
        });

        // Email to Admin
        await transporter.sendMail({
            from: email,
            to: envVars.EMAIL_USER,
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
            from: envVars.EMAIL_USER,
            to: email,
            subject: "Thank You for Contacting Hughes Contractors Pty Ltd",
            html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
          <h2 style="color: #ff5c00;">Hi ${name},</h2>

          <p>Thank you for reaching out to <strong>Hughes Contractors Pty Ltd</strong>. We’ve received your message and one of our team members will get back to you as soon as possible.</p>

          <p>We specialize in services such as:</p>
          <ul>
            <li>Civil Construction</li>
            <li>Plant Decommissioning</li>
            <li>Demolition Consultation & Execution</li>
            <li>Early Work Constructing</li>
            <li>Renewable Energy Project Support</li>
          </ul>

          <p>With a strong reputation for safety, reliability, and project excellence, we are committed to offering you the best possible solution tailored to your needs.</p>

          <p style="margin-top: 24px;">Warm regards,<br />
          <strong>Team Hughes Contractors Pty Ltd</strong><br />
          Botany, NSW<br />
          <a href="mailto:${envVars.EMAIL_USER}" style="color: #ff5c00;">${envVars.EMAIL_USER}</a>
          </p>
        </div>
      `,
        });
    },
};
