import "dotenv-safe/config.js";
import express from "express";
import sequelize from "./src/db/connection.js";

import User from "./src/models/UserModel.js";
import router from "./src/routes/UserRoutes.js";

const port = process.env.port || 3001;

const app = express();

app.use(express.json());

app.use("/user", router);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("Servidor rodando bonitinho em http://localhost:" + port);
    });
  })
  .catch((error) => console.log(error));
