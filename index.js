require('dotenv')
    .config();
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
app.use(express.static(publicPath));
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
