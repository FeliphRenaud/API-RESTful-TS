//express
import { Request, Response } from "express";
//model
import { MovieModel } from "../models/Movie";
//Logger
import logger from "../../config/logger";

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    logger.error(`Pane no sistema, alguem me desconfigurou: ${e.message}`);
  }
};
