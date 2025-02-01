import { Request, Response } from "express";
import { getUniqueIpCount } from "../services/ipServices";

export const getMetrics = (req: Request, res: Response): void => {
  const ips = getUniqueIpCount();

  res.status(200).send({ status: "success", message: "unique ips: " + ips });
};
