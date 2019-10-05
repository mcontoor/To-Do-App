
//Import ApolloServer for creating an instance of a apollo/graphql server.
//Also import gql for creating your graphql schema.
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = require('./typeDef');
const resolvers = require('./resolver');

const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose
    .connect("mongodb://localhost:27017/todo")
    .then(res => console.log("MongoDB connected"))
    .catch(err => console.log("Err at connection with mongo ", err));

const PORT = 5001;

//Type Definitions with your Query type, and schema query keyword set to it.
// const typeDefs = gql`
//     # Query object type.
//     type Query {
//         helloString: String
//     }
//     # Assign your query type to your Query type.
//     schema {
//         query: Query
//     }
// `
//Define your resolvers that will define how your fields are executed.
// const resolvers = {
//     Query: {
//         helloString: () => "Hello World!"
//     }
// }
// //Define your server by assigning it to your ApolloServer instance.
const server = new ApolloServer({ resolvers, typeDefs })

//Now listen on your server.
server.listen({ port: PORT }).then(({ url }) => console.log('Listening on ' + url));