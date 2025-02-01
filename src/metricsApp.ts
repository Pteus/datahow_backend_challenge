import express from "express";
import metricsRoutes from "./routes/metricsRoutes";

const metricsApp = express();

metricsApp.use("/metrics", metricsRoutes);

metricsApp.use((req, res, next) => {
  res.status(404).send("Route Not Found");
});

export default metricsApp;
