const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./backend/graphql/schema.js");
const resolvers = require("./backend/graphql/resolvers.js");
const express = require("express");
const next = require("next");

// const bodyParser from "body-parser";
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config

nextApp.prepare().then(() => {
  // Express =============================================
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Apollo ==============================================

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Apollo & Express combination ========================
  app.all("*", (req, res, next) => {
    if (req.url === apolloServer.graphqlPath) {
      return next();
    }

    return handle(req, res); // for all the react stuff
  });
  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({
      app: app,
    });
  });

  // Other things ========================================
  app.listen({ port }, () => {
    console.log(
      `🚀 Apollo Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
    );
    console.log(`🚀 Next JS App ready at http://localhost:${port}`);
  });
});
