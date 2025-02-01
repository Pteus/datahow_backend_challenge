import express from "express";
import logsRoutes from "./routes/logsRoutes";

const logsApp = express();

logsApp.use(express.json());

logsApp.use("/logs", logsRoutes);

logsApp.use((req, res, next) => {
  res.status(404).send("Route Not Found");
});

export default logsApp;
