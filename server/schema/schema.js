const { GraphQLSchema } = require("graphql");
const mutation = require("./mutations.schema");
const RootQuery = require("./queries.schema");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
