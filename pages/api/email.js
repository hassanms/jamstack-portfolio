import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const { name, email, phone, message } = req.body;
      const mailOptions = {
        from: email,
        to: "elahi.hamza99@gmail.com",
        subject: "Contact Form Submission",
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
