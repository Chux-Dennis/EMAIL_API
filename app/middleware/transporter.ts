import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { emailDetails } from "../email.config";

// Name
// Email
// Phone Number
// Subject
// Message

const emailTransporter = async (
  name: string,
  subject: string,
  email?: string,
  number?: number,
  message?: string
) => {
  const { emailAddress, emailAppPassword } = emailDetails;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailAddress,
      pass: emailAppPassword,
    },
  });

  const mailOptions = {
    from: emailAddress,
    to: emailAddress,
    subject: "Message from My Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\nSubject: ${subject}\nmessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (err: unknown | any, info) => {
    if (err) {
      console.log(err);
      return err;
    }
  });
};

export default emailTransporter;
