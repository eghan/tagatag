const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tag: {
      type: TagType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args){
        return axios.get(`http://localhost:3000/companies/${args.id}`)
        .then(resp => resp.data);
      }
    }
  }
});




module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});