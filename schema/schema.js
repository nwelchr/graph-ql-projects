const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt } = graphql;

// GraphQLObjectType: instructs graphQL about the
// presence of a user

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Samanatha', age: 21 }
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

// need root query, allows graphQL to jump into our graph of data
// by taking initial query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // if you ask me for a user, and give me an ID
    // I'll give you back a user
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
