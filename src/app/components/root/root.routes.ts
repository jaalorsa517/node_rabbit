import express from "express";
import * as root from "./root.controller";

const Router = express.Router();

Router.get("/", root.get);
Router.post("/", root.post);

export default Router;
