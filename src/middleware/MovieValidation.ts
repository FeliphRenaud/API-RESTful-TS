import { error } from "console";
import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O titulo é obrigatorio")
      .isLength({ min: 5 })
      .withMessage("Deve conter no minimo 5 caracteres"),
    body("rating")
      .isNumeric()
      .withMessage("A nota precisa ser um numero")
      .custom((value: number) => {
        if (value < 0 || value > 5) {
          throw new Error("A nota precisa ser um numero entre 1 e 5 ");
        }
        return true;
      }),
    body("description")
      .isString()
      .withMessage("Uma descrição do filme, por mais que curta é obrigatoria")
      .isLength({ min: 10 })
      .withMessage("Deve conter no minimo 10 caracteres "),
    body("director").isString().withMessage("O nome do diretor é obrigatorio"),
    body("poster").isURL().withMessage("A imagem precisa ser no formato URL"),
  ];
};
