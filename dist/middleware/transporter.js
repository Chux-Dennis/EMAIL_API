"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const email_config_1 = require("../email.config");
// Name
// Email
// Phone Number
// Subject
// Message
const emailTransporter = (name, subject, email, number, message) => __awaiter(void 0, void 0, void 0, function* () {
    const { emailAddress, emailAppPassword } = email_config_1.emailDetails;
    const transporter = nodemailer_1.default.createTransport({
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
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return err;
        }
    });
});
exports.default = emailTransporter;
