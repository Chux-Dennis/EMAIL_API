import express from "express";
import { Request, Response } from "express";
import emailTransporter from "./transporter";
const app = express();
import sendMailSchema from "../schema/sendMail";

const sendMail = async (req: Request, res: Response) => {
  if (Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ message: "Invalid API Request, the request body is empty" });
  }
  const { error } = sendMailSchema.validate(req.body);

  if (error) {
    res
      .status(400)
      .send({ message: error.details[0].message, error: "Validation Error" });
  } else {
    const { name, email, number, subject, message } = req.body;
    try {
      const request = await emailTransporter(
        name,
        subject,
        email,
        number,
        message
      );

      res
        .status(200)
        .send({ message: "Form Submited Successfully", details: req.body });
    } catch (error) {
      //Manage errors efficiently
      res.status(400).send({ message: "An error occurred ,try again" });
    }
  }
};

export default sendMail;
