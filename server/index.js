const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

// url from the mongoDB 
// username: peter
// password: test123
const MONGO_URL = "mongodb://peter:test123@ds117868.mlab.com:17868/apptrackbackend";

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`----Listening to port ${port}----`);
});

app.get('/', (req, res) => {
    res.redirect('./graphql');
});

mongoose.connect(MONGO_URL, { useNewUrlParser: true });
mongoose.connection
.once("open", () => console.log("Connected to MongoLab instance."));
