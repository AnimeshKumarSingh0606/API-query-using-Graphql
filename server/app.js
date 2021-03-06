const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const { schema } = require("./schema/schema");
const mongoose = require("mongoose");

var app = express();

app.use(cors());

mongoose.connect("mongodb://localhost/learn-graphql");
mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listening for requests on port 4000 ");
});
