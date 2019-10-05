//import your Player model to retrieve data from your players collection.
const ToDoItems = require('./models/Todo');
//Define your resolver
const resolvers = {
    Query: {
        // List: () => ToDoItems.find({}, (error, List) => {
        //     //If there is an errror throw the error on your graphql playground.
        //     if (error) throw new Error(error);
        //     console.log('ToDoItems-------', List);
        //     //Else return your players.
        //     return List;
        // }),
        hello: () => console.log("heellooooo")
    }
}

module.exports = resolvers;