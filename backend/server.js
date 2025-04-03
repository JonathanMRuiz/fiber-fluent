import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";



dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
  connectionTimeout: 10000,
});

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Todos los campos son requeridos." });
  }

  try {
    const mailOptions = {
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Mensaje de ${name} desde el sitio web`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito.");
    res.status(200).json({ success: true, message: "Mensaje enviado con éxito." });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    res.status(500).json({ success: false, message: "Hubo un error al enviar el correo." });
  }
});




app.listen(3001, () => {
  console.log("Servidor backend corriendo en http://localhost:3001");
});
