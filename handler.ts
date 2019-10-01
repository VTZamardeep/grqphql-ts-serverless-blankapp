import { GraphQLServerLambda } from 'graphql-yoga'
import * as Query from "./resolver/query/index";
import {typeDefs} from "./schema/schema";


const resolvers = {
  Query
}

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
})

export const server = lambda.graphqlHandler
export const playground = lambda.playgroundHandler