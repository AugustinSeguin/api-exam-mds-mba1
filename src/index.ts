import "dotenv/config";
import express from "express";
import cors from "cors";
import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
// import { actorRouter } from "./router/actor";
// import { movieRouter } from "./router/movie";
import { authRouter } from "./router/auth";
import { exportModels } from "./model/Model";
import swaggerUIPath from "swagger-ui-express";
import { honeyRouter } from "./router/honey";
import swaggerjsonFilePath from "../docs/swagger.json";

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'honey',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: 5432,
  ssl: true,
  clientMinMessages: 'notice',
});


// sequelize.sync({ force: true });
sequelize.sync();

export const {
  Honey,
  User,
  TokenBlackList
  // MovieActorModel
 } = exportModels(sequelize);

const app = express();
app.use(cors());
app.use(express.json());

const apiRouter = express.Router();
app.use('/api', authRouter);
apiRouter.use('/honeys', honeyRouter);

app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

if(process.env.ENV != "PRODUCTION")
{
  app.use("/api-docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath));
}

