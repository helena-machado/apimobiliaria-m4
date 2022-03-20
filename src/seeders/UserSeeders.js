import User from "../models/UserModel.js";

const users = [
  {
    nome: "Esli",
    sobrenome: "Queiroz",
    cpf: "34509876431",
    email: "emaildoesli@gmail.com",
    senha: "senhafortedoesli",
    cidade: "Recife",
    cargo: "Usuário",
  },

  {
    nome: "Léo",
    sobrenome: "Costa",
    cpf: "00987655461",
    email: "emaildoleo@gmail.com",
    senha: "umasenhaparaoleo",
    cidade: "Duque de Caxias",
    cargo: "Corretor",
  },

  {
    nome: "Helena",
    sobrenome: "Machado",
    cpf: "80040028922",
    email: "emaildahelena@gmail.com",
    senha: "aquelecpfnaoemeu",
    cidade: "São José dos Campos",
    cargo: "Administradora",
  },
];

users.forEach(async (obj) => {
  const usuario = await User.create(obj);
});
