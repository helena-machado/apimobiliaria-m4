import express from "express";
import { UserController } from "../controllers/UserController.js";

const router = express.Router();

router.post("/criar", UserController.criar);
router.get("/", UserController.todosOsUsuarios);
router.get("/:id", UserController.usuarioPeloId);

export default router;
