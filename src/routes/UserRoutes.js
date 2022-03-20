import express from "express";
import { UserController } from "../controllers/UserController.js";

const router = express.Router();

router.post("/", UserController.criar);
router.get("/", UserController.todosOsUsuarios);
router.get("/:id", UserController.usuarioPeloId);
router.put("/:id", UserController.editarUsuarioPeloId);
router.delete("/:id", UserController.excluirPeloId);

export default router;
