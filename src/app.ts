
import express, { Request, Response } from "express"

import cors from "cors"

import { router } from "./app/routes"
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler"
import notFound from "./app/middlewares/notFound"

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Hughes Contractors Pty Ltd Project Management API",
    });
});


app.use("/api/v1", router);


app.use(globalErrorHandler);

app.use(notFound);

export default app;
