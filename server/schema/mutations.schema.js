// Mongoose models
const Project = require("../models/Project"),
  Client = require("../models/Client"),
  User = require("../models/User"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");
const { UserType, ClientType, ProjectType } = require("./types.schema");

const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
});
const makeId = (length = 12) => {
  var result = "";
  var characters = "1234567890qwertyuiopasdfghjklzxcvbnm";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
// mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // user registration

    registerUser: {
      type: UserType,
      args: {
        fullName: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const { name, email, fullName, password } = args;
        // See if an old user exist with email attempting register

        const checkForUserByEmail = await User.findOne({ email });
        const checkForUserByUserName = await User.findOne({ name });
        // throw error if that user exists
        if (checkForUserByEmail) {
          throw new Error(
            `A user is already registered with the email ${email}`,
            "USER_ALREADY_REGISTERED"
          );
        }
        // throw error if that user exists
        if (checkForUserByUserName) {
          throw new Error(
            `A user is already registered with the username ${name}`,
            "USER_ALREADY_REGISTERED"
          );
        }
        // Encrypt password
        var encryptedPassword = await bcrypt.hash(password, 10);

        // Build out mongoose model(User)

        const createdAt = longEnUSFormatter.format(new Date());

        const newUser = new User({
          fullName,
          name,
          email: email.toLowerCase(),
          password: encryptedPassword,
          createdAt,
          lastLoggedIn: createdAt,
        });

        // Create our JWT (attach to out User model)
        const token = jwt.sign(
          { user_id: newUser._id, email },
          process.env.JWT_TOKEN_STRING,
          {
            expiresIn: "3h",
          }
        );
        newUser.token = token;

        // Save Our user in MongoDB

        return await newUser.save();
        // or use
        // User.create
      },
    },
    // user login
    loginUser: {
      type: UserType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, { email, password }) {
        // See if an user exist with email
        const user = await User.findOne({ email });

        // Check if the entered password equals the encrypted password
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create a New token
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_TOKEN_STRING,
            {
              expiresIn: "3h",
            }
          );

          // attach to out User model that we found above
          user.token = token;
          //   update lastLoggedIn

          const lastLoggedIn = longEnUSFormatter.format(new Date());

          User.findByIdAndUpdate(
            user.id,
            {
              $set: {
                lastLoggedIn,
              },
            },
            { new: true }
          );
          return user;
        } else {
          // if user doesn't exists throw error
          throw new Error(`Incorrect password`, "INCORRECT_PASSWORD");
        }
      },
    },
    // google  sign in
    googleLogin: {
      type: UserType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
      },

      async resolve(parent, { email }) {
        const user = await User.findOne({ email });
        if (user) {
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_TOKEN_STRING,
            {
              expiresIn: "3h",
            }
          );

          // attach to out User model that we found above
          user.token = token;
          //   update lastLoggedIn

          const lastLoggedIn = longEnUSFormatter.format(new Date());

          User.findByIdAndUpdate(
            user.id,
            {
              $set: {
                lastLoggedIn,
              },
            },
            { new: true }
          );
          return user;
        } else {
          // if user doesn't exists throw error
          throw new Error(`User Doesn't exist`, "UNKNOWN_USER");
        }
      },
    },
    // google  sign in
    googleSignUp: {
      type: UserType,
      args: {
        fullName: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
      },

      async resolve(parent, { fullName, name, email }) {
        const checkForUserByEmail = await User.findOne({ email });
        // throw error if that user exists
        if (checkForUserByEmail) {
          throw new Error(
            `A user is already registered with the email ${email}`,
            "USER_ALREADY_REGISTERED"
          );
        }
        // Encrypt password
        var encryptedPassword = await bcrypt.hash(makeId(10), 10);

        // Build out mongoose model(User)

        const createdAt = longEnUSFormatter.format(new Date());

        const newUser = new User({
          fullName,
          name,
          email: email.toLowerCase(),
          password: encryptedPassword,
          createdAt,
          lastLoggedIn: createdAt,
        });

        // Create our JWT (attach to out User model)
        const userToken = jwt.sign(
          { user_id: newUser._id, email },
          process.env.JWT_TOKEN_STRING,
          {
            expiresIn: "3h",
          }
        );
        newUser.token = userToken;

        // Save Our user in MongoDB

        return await newUser.save();
      },
    },

    // CLients mutations
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
        userId: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, { name, email, phone, userId }) {
        // See if an user exist with email
        const oldClient = await Client.findOne({ email });
        if (oldClient) {
          throw new Error(
            `A client with the email ${email} is already associated with you`,
            "CLIENT_ALREADY_ADDED"
          );
          return;
        }
        const client = new Client({
          name,
          email,
          phone,
          userId,
        });

        return client.save();
        // or use
        // Client.create
      },
    },
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        Project.find({ clientId: args.id }).then((projects) => {
          projects.forEach((project) => project.remove());
        });
        return Client.findByIdAndDelete(args.id);
      },
    },

    // Update a Client
    updateClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Client.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
              phone: args.phone,
            },
          },
          { new: true }
        );
      },
    },
    // add project

    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        projectType: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              approval: { value: "Waiting Approval" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          projectType: args.projectType,
          status: args.status,
          clientId: args.clientId,
          userId: args.userId,
        });

        return project.save();
      },
    },
    // delete project
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Project.findByIdAndDelete(args.id);
      },
    },
    // Update a project
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        projectType: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatusUpdate",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              approval: { value: "Waiting Approval" },
              completed: { value: "Completed" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = mutation;
