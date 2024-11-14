import { Router } from "express";

import {
  createVeiculoController,
  deleteVeiculoController,
  getVeiculoByIdController,
  getVeiculosController,
  updateVeiculoController,
} from "../controllers/veiculos.controller.js";

const router = Router();

router.get("/", getVeiculosController);
router.get("/:id", getVeiculoByIdController);
router.post("/", createVeiculoController);
router.put("/:id", updateVeiculoController);
router.delete("/:id", deleteVeiculoController);

export default router;