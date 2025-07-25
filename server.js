import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true,
  debug: true,
});

app.post("/contact", async (req, res) => {
  const { name, email, message, service } = req.body;

  console.log("Received form data:", req.body); // 👈 Add this temporarily

  const mailOptions = {
    from: email,
    to: process.env.TO_EMAIL,
    subject: `Contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Service: ${service}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
