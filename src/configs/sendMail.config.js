import { text } from 'express';
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kiley.hackett44@ethereal.email',
        pass: 'u9qWxPMf6RZBn1YJrX'
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

