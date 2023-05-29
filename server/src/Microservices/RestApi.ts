import { ExpressAppServer } from "../CommonHttpServer/ExpressAppServer";
import { MongoDbConnections } from "../Database/MongoDbConnections";
import { ApiRouter } from "./ApiRouter";
import { Logger } from "../Utils/Logger";
import { ServerConfig } from "../serverConfig";
import { GraceFullShutDown } from "../Utils/GracefullShutdown";

export async function main() {
  try {
    const expressAppServer = new ExpressAppServer(
      ServerConfig.REST_API_PORT,
      "oaktree_apps_REST_app"
    );

    const graceFullShutDownHandler = new GraceFullShutDown(
      "oaktree_apps_REST_app"
    );

    await MongoDbConnections.OaktreeApps.createConnection();
    const app = await expressAppServer.initialize();

    graceFullShutDownHandler.registerHttpServer(expressAppServer);
    graceFullShutDownHandler.registerDbConnection(
      MongoDbConnections.OaktreeApps
    );
    app.use("/api", ApiRouter);

    graceFullShutDownHandler.listen();
  } catch (error) {
    Logger.warn({ message: "Main Function Error", tag: "Main", error });
    process.exit(1);
  }
}
