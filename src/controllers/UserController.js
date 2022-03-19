import User from "../models/UserModel.js";
import * as bcrypt from "bcrypt";

export class UserController {
  static async criar(req, res) {
    const { nome, sobrenome, cpf, email, senha, cidade, cargo } = req.body;

    if (!nome || !sobrenome || !cpf || !email || !senha || !cidade || !cargo) {
      return res
        .status(400)
        .json({ msg: "O preenchimento de todos os campos é obrigatório." });
    }

    const usuarioExiste = await User.findOne({ where: { email: email } });

    if (usuarioExiste) {
      return res.status(400).json({
        msg: "Este e-mail já está cadastrado. Por favor, efetue o login.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaSegura = await bcrypt.hash(senha, salt);

    const usuario = {
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf,
      email: email,
      senha: senhaSegura,
      cidade: cidade,
      cargo: cargo,
    };

    try {
      await User.create(usuario);
      res.status(201).json({ msg: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  }
}
