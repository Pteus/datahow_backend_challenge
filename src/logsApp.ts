import express from "express";
import logsRoutes from "./routes/logsRoutes";

const logsApp = express();

logsApp.use(express.json());

logsApp.use("/logs", logsRoutes);

export default logsApp;
