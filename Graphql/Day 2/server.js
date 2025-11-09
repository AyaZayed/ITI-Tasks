const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");
const { users } = require("./data/db");
const { verifyToken } = require("./utils/tokens");

async function start() {
        const app = express();
        const server = new ApolloServer({
                typeDefs: typeDefs,
                resolvers: resolvers,
                context: ({ req }) => {
                        if (req.headers.authorization) {
                                const token = req.headers.authorization.split(" ")[1];
                                try {
                                        const decoded = verifyToken(token);
                                        const user = users.find(u => u.id === decoded.sub);
                                        return { user };
                                } catch (err) {
                                        return { user: null };
                                }
                        }
                        return null;
                },
        });

        await server.start();
        server.applyMiddleware({ app, path: "/graphql" });

        app.listen(5000, () => {
                console.log("App Running on http://localhost:5000/graphql");
        });
}

start();