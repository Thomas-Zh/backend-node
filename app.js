// app.js

const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const post = require('./routes/post.route'); // Imports routes for the post
const app = express();
const cors = require('cors');
// Set up mongoose connection
const mongoose = require('mongoose');
const port = process.env.PORT || 80;
// let dev_db_url = "mongodb+srv://Thomas:TZ67228217@cluster0-juxnh.mongodb.net/test?retryWrites=true";
// const mongoDB = process.env.MONGODB_URI || dev_db_url;
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.connect('mongodb+srv://Thomas:TZ67228217@cluster0-juxnh.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/posts', post);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
