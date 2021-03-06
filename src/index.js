const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares 
app.use(morgan('dev'));
app.use(express.json()); 

//Routes
app.use('/api/tasks', require('./routes/task.routes.js')); 
app.use(express.static(path.join(__dirname, 'public')));  
app.get('*', (req,res) =>{ 
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

 

//Statics files
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});