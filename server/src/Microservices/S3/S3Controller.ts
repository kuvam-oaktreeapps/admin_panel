import { v4 as uuidv4 } from "uuid";
import { S3ImageUploadDto } from "./S3.dto";
import { s3 } from "./S3.config";
import { HttpStatusCodes } from "../../CommonConstants";
import { Logger } from "../../Utils/Logger";

const tag = "S3Controller";

export const S3Controller = {
  async upload(input: S3ImageUploadDto) {
    const { fileString, folderName } = input;

    const fileType = fileString.split(";")[0].split("/")[1];
    const fileName = `${uuidv4()}.${fileType}`;

    const uploadData = await s3
      .upload({
        Bucket: process.env.S3_BUCKET_NAME as string,
        Key: `${folderName}/${fileName}`,
        Body: fileString,
        ContentType: `image/${fileType}`,
      })
      .promise();

    Logger.info({ message: "S3 Upload Success", tag, data: { uploadData } });

    return {
      status: HttpStatusCodes.OK,
      data: { url: uploadData.Location },
      message: "Success",
    };
  },
};
