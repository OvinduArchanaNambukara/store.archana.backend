import express, {Application} from "express";
import dotenv from "dotenv";
import {connectDatabase} from "./database/connection/connection";
import {ApolloServer} from "apollo-server-express";
import {typeDefs} from "./graphql/type-defs/typeDefs";
import {productResolver} from "./graphql/resolvers/Product";

dotenv.config();
const app: Application = express();

connectDatabase().then(() => {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: productResolver,
  });

  server.start().then(() => {
    server.applyMiddleware({app, path: "/graphql"});

    app.listen({port: process.env.PORT}, () => {
      console.log(`Apollo Server on http://localhost:${process.env.PORT}/graphql`);
    });
  });
});


