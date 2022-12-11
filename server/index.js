const express = require("express");
const colors = require("colors");
const cors = require("cors");
// require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 8000;
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//Connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log("Server running on port ", port));
