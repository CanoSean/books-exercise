const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
//remove the error when using on script
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://sean:cano@firstdatabase.wtjbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to database')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log("now listening");
});