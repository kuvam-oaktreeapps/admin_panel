import { S3 } from "aws-sdk";
import { ServerConfig } from "../../serverConfig";

export const s3 = new S3({
  secretAccessKey: ServerConfig.S3_CONFIG.secretAccessKey,
  accessKeyId: ServerConfig.S3_CONFIG.accessKeyId,
  region: ServerConfig.S3_CONFIG.region,
  apiVersion: "2006-03-01",
});
