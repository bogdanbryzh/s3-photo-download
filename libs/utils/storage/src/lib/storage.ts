import {
  S3Client,
  GetObjectCommand,
  GetObjectCommandInput,
  PutObjectCommandInput,
  PutObjectCommand,
} from '@aws-sdk/client-s3';
import { AWS_S3_REGION } from '@s3-photo-download/config';

const s3Client = new S3Client({
  region: AWS_S3_REGION,
});

export const uploadFileToS3 = async (params: PutObjectCommandInput) => {
  const result = await s3Client.send(new PutObjectCommand(params));

  return result;
};

export const donwloadFileFromS3 = async (params: GetObjectCommandInput) => {
  const result = await s3Client.send(new GetObjectCommand(params));

  return result;
};

export default s3Client;
