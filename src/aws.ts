import {Credentials, CredentialsOptions} from "aws-sdk/lib/credentials";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import express, {Application} from "express";

dotenv.config();

const app: Application = express();
app.use(express.json());

export const credentials: Credentials | CredentialsOptions = {
  accessKeyId: `${process.env.AWS_S3_ACCESS_KEY_ID}`,
  secretAccessKey: `${process.env.AWS_S3_SECRET_KEY}`
}

AWS.config.update({credentials: credentials, region: process.env.AWS_S3_REGION});

