"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transporterRoute_1 = __importDefault(require("./middleware/transporterRoute"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).send({
        denied: true,
        message: "You are not allowed to view this resource",
    });
});
app.post("/send-mail", transporterRoute_1.default);
app.listen(PORT, () => {
    console.log(`Server is open at ${PORT}`);
});
