import { text } from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.PASS_USERNAME
    }
});

export const mailService = {
    async sendMail(
        {
            emailFrom,
            emailTo,
            emailSubject,
            emailText
        }
    ) {
        const mailOptions = {
            from: emailFrom,
            to: emailTo,
            subject: emailSubject,
            text: emailText,
        }
        console.log("mailOptions: ", mailOptions);
        return await transporter.sendMail(mailOptions);
    },


}

