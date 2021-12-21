//Import express modules 
const express = require('express');
const app = express(); 

//import api routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//set port 
let PORT = process.env.PORT || 3001;

//parse json data and use static files
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use( express.static('public'));

//use api and html routes
app.use('/routes', apiRoutes);
app.use('/routes', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });