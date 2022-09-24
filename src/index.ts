import app from "./app";
import config from "config";
import http from "http";

const httpServer = http.createServer(app);

httpServer.listen(config.get("port"), () => {
  console.log(`Server is listening on port ${config.get("port")}`);
});
