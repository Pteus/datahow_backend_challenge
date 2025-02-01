import { Request, Response } from "express";
import { register } from "prom-client";

// if we need default metrics recommended by Prometheus
// collectDefaultMetrics();

export const getMetrics = async (
  req: Request,
  res: Response,
): Promise<void> => {
  res.setHeader("Content-Type", register.contentType);
  // register.metrics() sends back the metrics
  // prom-client wires the Counter to the metrics()
  res.status(200).send(await register.metrics());
};
