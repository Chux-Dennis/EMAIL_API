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
const express_1 = __importDefault(require("express"));
const transporter_1 = __importDefault(require("./transporter"));
const app = (0, express_1.default)();
const sendMail_1 = __importDefault(require("../schema/sendMail"));
const sendMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length === 0) {
        res
            .status(400)
            .send({ message: "Invalid API Request, the request body is empty" });
    }
    const { error } = sendMail_1.default.validate(req.body);
    if (error) {
        res
            .status(400)
            .send({ message: error.details[0].message, error: "Validation Error" });
    }
    else {
        const { name, email, number, subject, message } = req.body;
        try {
            const request = yield (0, transporter_1.default)(name, subject, email, number, message);
            res
                .status(200)
                .send({ message: "Form Submited Successfully", details: req.body });
        }
        catch (error) {
            //Manage errors efficiently
            res.status(400).send({ message: "An error occurred ,try again" });
        }
    }
});
exports.default = sendMail;
