"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailDetails = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "../.env" });
const emailDetails = {
    emailAppPassword: process.env.APP_PASSWORD ||
        (() => {
            throw new Error("APP_PASSWORD is not defined in the environment variables");
        })(),
    emailAddress: process.env.EMAIL_ADDRESS ||
        (() => {
            throw new Error("EMAIL_ADDRESS is not defined in the environment variables");
        })(),
};
exports.emailDetails = emailDetails;
