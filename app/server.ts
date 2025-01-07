import express, { Request, Response } from "express";
import sendMail from "./middleware/transporterRoute";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    denied: true,
    message: "You are not allowed to view this resource",
  });
});

app.post("/send-mail", sendMail);

app.listen(PORT, () => {
  console.log(`Server is open at ${PORT}`);
});
