import { Request, Response } from "express";
import { addIp } from "../services/ipServices";

interface Log {
  timestamp: string;
  ip: string;
  url: string;
}

export const logRequest = (req: Request, res: Response): void => {
  const log: Log = req.body;

  addIp(log.ip);

  res.status(200).send({ status: "success", message: "Log entry received" });
};
