const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;



module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});