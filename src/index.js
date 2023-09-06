const express = require ('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
})); // Middleware
app.use(express.json());

// XMLHttpRequest, fetch, axios.
// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs',handlebars({
    extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init

route(app);

// 127.0.0.1 - localhost:3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));