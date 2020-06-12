const express = require('express');
const app = express();

//path library
const path = require('path');

//Setting view directory
app.set('views', path.join(__dirname, 'views'));

//View engine
app.set('view engine', 'ejs');

//routes
const routes = require('./routes.js');
app.use('/', routes);

//starting server 
app.listen(process.env.PORT || 3000, port=> console.log(`Listening on port ${port}`));

