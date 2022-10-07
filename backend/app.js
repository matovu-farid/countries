//TODO: delete file
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import express from "express";
import http from "http";
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

import next from "next";
import bodyParser from "body-parser";

const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of nex
await nextApp.prepare();

async function startApolloServer({ typeDefs, resolvers }) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",

    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  app.all("*", (req, res, next) => {
    if (req.url === server.graphqlPath) {
      return next();
    }

    return handle(req, res); // for all the react stuff
  });

  await server.start();
  server.applyMiddleware({ app, path: "/api/countries" });
  const port = 3000;

  await new Promise((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}
startApolloServer({ typeDefs, resolvers });
