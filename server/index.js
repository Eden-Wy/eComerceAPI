import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { errorHandler } from "./utils/errorHandler.js";

config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
