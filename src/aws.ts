import {Credentials, CredentialsOptions} from "aws-sdk/lib/credentials";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import express, {Application, Response, Request} from "express";

dotenv.config();

const app: Application = express();
app.use(express.json());

const credentials: Credentials | CredentialsOptions = {
  accessKeyId: `${process.env.AWS_S3_ACCESS_KEY_ID}`,
  secretAccessKey: `${process.env.AWS_S3_SECRET_KEY}`
}

AWS.config.update({credentials: credentials, region: process.env.AWS_S3_REGION});

app.post('/getImage', (req: Request, res: Response) => {
  const s3 = new AWS.S3();

  const presignedGETURL = s3.getSignedUrl('getObject', {
    Bucket: `${process.env.AWS_S3_BUCKET_NAME}`,
    Key: req.header('aws_image_key'),
    Expires: 100
  });

  res.send(presignedGETURL);
});

app.listen(process.env.PORT, () => {
  console.log(`App is listen at http://localhost/${process.env.PORT}`);
});
