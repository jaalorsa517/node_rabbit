import express from "express";
import cors from "cors";
import routes from "./routes";

const _app = express();

_app.use(cors());
_app.use(express.json());
_app.use(express.urlencoded({ extended: true }));

_app.use("/api/v1", routes);

export default _app;
