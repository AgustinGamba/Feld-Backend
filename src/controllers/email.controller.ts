import { Request, Response } from "express";
import { AxiosError } from 'axios';
import emailService from "../services/email.service";

export default {
  async sendEmail(req: Request, res: Response) {
    // TODO: Sanitize email
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      // TODO: Add zod or similar for validation
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      await emailService.sendEmail({ name, email, message });
      
      res.status(200).json({ error: "Email sent successfully" });
    } catch (error) {
      console.log(error)
      let message: string;

      if (error instanceof AxiosError) {
        message = error.response?.data?.message || 'Unknown error from Axios';
      } else if (error instanceof Error) {
        message = error.message;
      } else {
        message = String(error);
      }

      console.log(message);
      res.status(500).json({ error: "Error sending the email" });
    }
  }
};
