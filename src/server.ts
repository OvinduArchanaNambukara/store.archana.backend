import express, {Application, Request, Response} from "express";
import dotenv from "dotenv";
import {connectDatabase} from "./database/connection/connection";
import {ApolloServer} from "apollo-server-express";
import {rootTypeDefs} from "./graphql/type-defs/RootTypeDefs";
import AWS from "aws-sdk";
import {credentials} from "./aws";
import {rootReducer} from "./graphql/resolvers/RootReducer";
import {getUser} from "./jwt";

dotenv.config();
const app: Application = express();
app.use(express.json());


AWS.config.update({credentials: credentials, region: process.env.AWS_S3_REGION});

const server = new ApolloServer({
  typeDefs: rootTypeDefs,
  resolvers: rootReducer,
  context: ({req}) => {
    const token: string | undefined = req.headers.authorization;
    if (token) {
      const result = getUser(token);
      return result;
    }
  }
});

connectDatabase().then(() => {
  server.start().then(() => {
    server.applyMiddleware({app, path: "/graphql"});

    app.post('/getImage', (req: Request, res: Response) => {
      const s3 = new AWS.S3();
      const presignedGETURL = s3.getSignedUrl('getObject', {
        Bucket: `${process.env.AWS_S3_BUCKET_NAME}`,
        Key: req.body.key,
        Expires: 100
      });
      res.send(presignedGETURL);
    });

    app.get('/uploadImage', (req: Request, res: Response) => {
      const s3 = new AWS.S3();
      const presignedGETURL = s3.getSignedUrl('putObject', {
        Bucket: `${process.env.AWS_S3_BUCKET_NAME}`,
        Key: req.body.key,
        Expires: 100,
        ContentType: req.body.content_type
      });
      res.send(presignedGETURL);
    });

    app.listen({port: process.env.PORT}, () => {
      console.log(`Apollo Server on http://localhost:${process.env.PORT}/graphql`);
    });
  })
}).catch(() => {
  console.log("Server error");
});


getUser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWM1NmY1NGEtMzFiYS00MGQyLWIzM2QtNmYxOTk5ZGUxZTg2IiwiaWF0IjoxNjI4NzEyNDUxfQ.hE9qfS0u9qabJlMVb_Pbn742EJSC8AAWxe6ysPeqYaU");
