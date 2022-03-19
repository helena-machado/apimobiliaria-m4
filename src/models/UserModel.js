import sequelize from "../db/connection.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        alerta: "Por favor, preencha seu nome!",
      },
    },
  },

  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        alerta: "Por favor, preencha seu sobrenome!",
      },
    },
  },

  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        alerta: "Por favor, informe os números do seu CPF.",
      },
      isAlphanumeric: {
        alerta:
          "Por favor, complete este campo utilizando apenas os números do seu CPF.",
      },
      len: {
        args: [11, 11],
        alerta: "Insira um número de CPF válido.",
      },
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { alerta: "O preenchimento do e-mail é obrigatório!" },
      isEmail: { alerta: "Informe um e-mail válido para prosseguir." },
    },
  },

  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { alerta: "Este campo não pode ser deixado em branco!" },
    },
  },

  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        alerta: "Por favor, informe a cidade onde reside atualmente.",
      },
    },
  },

  cargo: {
    type: DataTypes.ENUM(
      "Corretor",
      "Corretora",
      "Usuário",
      "Usuária",
      "Imobiliária",
      "Admnistrador",
      "Admnistradora"
    ),
    allowNull: false,
  },
});

export default User;
