const { gql } = require('apollo-server');

// Define your type definitions which be Query, and Player object types
const typeDefs = gql`
    
    type Query {
        List: [ToDoItems]
        hello: String
    }
    type ToDoItems {
        text: String
    }
    schema {
        query: Query
    }
`;

//Export your type definitions as a default export 
module.exports = typeDefs;