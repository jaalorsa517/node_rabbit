import express from "express";
import root from "./components/root/root.routes";

const _router = express.Router();

_router.use("/", root);

export default _router;
