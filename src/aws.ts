import {Credentials, CredentialsOptions} from "aws-sdk/lib/credentials";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import express, {Application, Response, Request} from "express";

dotenv.config();

const app1: Application = express();
app1.use(express.json());


const credentials: Credentials | CredentialsOptions = {
  accessKeyId: `${process.env.AWS_S3_ACCESS_KEY_ID}`,
  secretAccessKey: `${process.env.AWS_S3_SECRET_KEY}`
}

AWS.config.update({credentials: credentials, region: process.env.AWS_S3_REGION});

const s3 = new AWS.S3();

const presignedGETURL = s3.getSignedUrl('getObject', {
  Bucket: `${process.env.AWS_S3_BUCKET_NAME}`,
  Key: 'images/categories/electronic.webp',
  Expires: 100
});

console.log(presignedGETURL);

app1.post('/getImage', (req: Request, res: Response) => {
  res.send(req.header('aws_image_key'));
});
