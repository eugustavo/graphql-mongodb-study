import { ApolloServer, IResolvers } from 'apollo-server';
import mongoose from 'mongoose';

interface IApolloServer {
  typeDefs: string[],
  resolvers: IResolvers
}

function startServer({ typeDefs, resolvers }: IApolloServer) {
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`🚀 Server started at ${url}`));
}

export default startServer;