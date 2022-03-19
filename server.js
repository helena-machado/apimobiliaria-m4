import "dotenv-safe/config.js";
import express from "express";
import sequelize from "./src/db/connection.js";

const port = process.env.port;

const app = express();

app.use(express.json());

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Servidor rodando bonitinho em http://localhost:" + port);
    });
  })
  .catch((error) => console.log(error));
