import { Router, Request, Response } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovie,
} from "./controllers/MovieControlers";

//validations
import { validate } from "./middleware/HandleValidation";
import { movieCreateValidation } from "./middleware/MovieValidation";

const router = Router();

//checando funcionamento da API
router.get("/teste", (req: Request, res: Response) => {
  res.status(200).send("API Working");
});

// rota para postagem de filmes
router.post("/movie", movieCreateValidation(), validate, createMovie);

// rota para localização via id
router.get("/movie/:id", findMovieById);

//rotas para buscar todos os artigos do catalogo
router.get("/movie", getAllMovies);

//rota para remoção de titulo "filme"
router.delete("/movie/:id", removeMovie);

//rota para edição do cadastro de filme
router.patch("/movie/:id", movieCreateValidation(), validate, updateMovie);
export default router;
