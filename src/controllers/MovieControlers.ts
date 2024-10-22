//express
import { Request, Response } from "express";
//model
import { MovieModel } from "../models/Movie";
//Logger
import Logger from "../../config/logger";

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(`Pane no sistema, alguem me desconfigurou: ${e.message}`);
    return res.status(500).json({ error: "Erro ao criar o filme " });
  }
};

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe" });
    }
    return res.status(200).json(movie);
  } catch (e: any) {
    Logger.error(`Pane no sistema, alguem me desconfigurou: ${e.message}`);
    return res.status(500).json({ error: "Erro ao buscar o filme " });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (e: any) {
    Logger.error(`Pane no sistema, alguem me desconfigurou: ${e.message}`);
    return res
      .status(500)
      .json({ error: "Erro ao buscar o catalogo de filmes " });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res
        .status(404)
        .json({ error: "O filme a ser deletado não existe" });
    }

    await movie.deleteOne();

    return res.status(200).json({ msg: "O filme foi removido com sucesso" });
  } catch (e: any) {
    Logger.error(`Pane no sistema, alguem me desconfigurou: ${e.message}`);
    return res.status(500).json({
      error: "Erro ao remover o filme do catalogo, Por favor tente mais tarde",
    });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;

    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res
        .status(404)
        .json({ error: "O filme a ser editado não existe" });
    }

    await MovieModel.updateOne({ _id: id }, data);
    return res.status(200).json(data);
  } catch (e: any) {
    Logger.error(`Pane no sistema, alguem me desconfigurou: ${e.message}`);
    return res.status(500).json({
      error:
        "Erro ao tentar editar o titulo no catalogo, Por favor tente mais tarde",
    });
  }
}
