import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from 'path';
import { IResolvers } from 'apollo-server';

const resolversArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.ts'));
const resolvers: IResolvers = mergeResolvers(resolversArray);

export default resolvers;