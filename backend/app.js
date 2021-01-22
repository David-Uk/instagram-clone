const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = 'mongodb://127.0.0.1:27017/';

// Import user model
require('./models/User');

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('open', () => {
    console.log('Connected to database successfully')
})
mongoose.connection.on('error', err => {
    console.log(`Error ${err} encountered`);
})

const db =

    app.get('/', (req, res) => {
        res.send('Hello World');
    })

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
})
