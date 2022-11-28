// Mongoose models
const Project = require("../models/Project"),
  Client = require("../models/Client"),
  User = require("../models/User");

const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");

const { UserType, ClientType, ProjectType } = require("./types.schema");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return User.findById(id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.find({ userId: args.id });
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.find({ userId: args.id });
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

module.exports = RootQuery;
