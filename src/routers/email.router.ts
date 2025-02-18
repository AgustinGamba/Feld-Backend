import express from "express";
import emailController from "../controllers/email.controller";

const router = express.Router();

router.post("/", emailController.sendEmail);

export default router;
