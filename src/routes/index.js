import { Router } from "express";

import veiculosRouter from "./veiculos.router.js";

const router = Router();

router.use("/veiculos", veiculosRouter);

export default router;
