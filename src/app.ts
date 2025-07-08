import express, { Application, NextFunction, Request, Response } from "express";
import { projectRoutes } from "./app/controllers/projects.controller";


import cors from "cors"
import { handleContactForm } from "./app/controllers/email.controller";
import { labourRoutes } from "./app/controllers/labour.controller";
import { equipmentRoutes } from "./app/controllers/equipments.controller";

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://b5-a4-frontend-sazid.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: false,
  })
);

// routes
app.use("/api/projects", projectRoutes);
app.use("/api/labours", labourRoutes);
app.use("/api/equipments", equipmentRoutes);
app.post("/api/contact", handleContactForm);

// common route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To My Application");
});

// not found route error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found !",
    error: {}
  });
});

// all other error handler except validation error and route error

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("Error:", error);
    res.status(400).json({
      success: false,
      message: "Something went Wrong!",
      error,
    });
  }
});

export default app;
