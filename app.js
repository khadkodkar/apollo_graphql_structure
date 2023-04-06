// const { ApolloServer } = require("apollo-server");
// const { createServer } = require("http");
// const { execute, subscribe } = require("graphql");
// const { SubscriptionServer } = require("subscriptions-transport-ws");
// const { typeDefs, resolvers } = require("./schema");

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   subscriptions: {
//     path: "/subscriptions",
//     onConnect: (connectionParams, webSocket, context) => {
//       // Perform any necessary authentication or setup tasks here
//     },
//     onDisconnect: (webSocket, context) => {
//       // Clean up any resources or subscriptions here
//     },
//   },
// });

// const httpServer = createServer();
// httpServer.listen({ port: 4000 }, () => {
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//   console.log(
//     `🚀 Subscriptions ready at ws://localhost:4000${server.subscriptionsPath}`
//   );
// });

// const subscriptionServer = SubscriptionServer.create(
//   {
//     schema: server.schema,
//     execute,
//     subscribe,
//   },
//   {
//     server: httpServer,
//     path: server.subscriptionsPath,
//   }
// );
