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

  static async todosOsUsuarios(req, res) {
    const usuarios = await User.findAll({ attributes: { exclude: ["senha"] } });

    if (!usuarios) {
      return res.status(400).json({ msg: "Não há usuários cadastrados" });
    }
    res.status(200).json({ usuarios });
  }

  static async usuarioPeloId(req, res) {
    const { id } = req.params;

    const usuario = await User.findByPk(id, {
      attributes: { exclude: ["senha"] },
    });

    if (!usuario) {
      return res.status(400).json({ msg: "Usuário não encontrado!" });
    }
    res.status(200).json({ usuario });
  }

  static async editarUsuarioPeloId(req, res) {
    const { id } = req.params;
    const { nome, sobrenome, cpf, email, senha, cidade, cargo } = req.body;

    if (!nome || !sobrenome || !cpf || !email || !senha || !cidade || !cargo) {
      return res.status(400).json({
        msg: "Por favor, preencha todos os campos antes de prosseguir novamente.",
      });
    }

    const usuarioExiste = await User.findOne({ where: { id: id }, raw: true });

    if (!usuarioExiste) {
      return res.status(400).json({
        msg: "Usuário não encontrado. Por favor, verifique antes de prosseguir novamente.",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaSegura = await bcrypt.hash(senha, salt);

    const usuarioNovo = {
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf,
      email: email,
      senha: senhaSegura,
      cidade: cidade,
      cargo: cargo,
    };

    try {
      await User.update(usuarioNovo, { where: usuarioExiste });
      const dadosAtualizados = await User.findByPk(id, {
        attributes: { exclude: ["senha"] },
      });
      res.json({
        msg: "Usuário atualizado com sucesso!",
        data: { dadosAtualizados },
      });
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  }

  static async excluirPeloId(req, res) {
    const { id } = req.params;
    const usuario = await User.findOne({ where: { id: id }, raw: true });

    if (!usuario) {
      return res.status(400).json({
        msg: "Usuário não encontrado, verifique o ID inserido.",
      });
    }

    try {
      await User.destroy({ where: usuario });
      return res.status(200).json({ msg: "Usuário excluido com sucesso!" });
    } catch (error) {
      return res.status(400).json({ msg: error });
    }
  }
}
