const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { MONGO_URL } = require('./config/keys');

const app = express();
const PORT = process.env.PORT || 5000;

// Import user model
require('./models/User');
require('./models/Posts');

app.use(bodyParser.json())
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

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
