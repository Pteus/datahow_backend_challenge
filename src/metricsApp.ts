import express from "express";
import metricsRoutes from "./routes/metricsRoutes";

const metricsApp = express();

metricsApp.use("/metrics", metricsRoutes);

export default metricsApp;
