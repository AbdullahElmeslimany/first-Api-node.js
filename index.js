const express = require('express');
const bodyParser = require('body-parser');
const myRouter = require('./routes/home');
const mongoose = require('mongoose');
const app = express();

// //middelWare 
// app.use('/home', (req, res, next) => {
//     console.log('Request received');
//     next();

// });
//body
app.use(bodyParser.json());


//mongose connect 

mongoose.connect('mongodb+srv://muslim:thVFkL1wHxNVCWrZ@cluster0.hst5slk.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to database!');
        app.use('/home', myRouter);

        app.listen(8080, () => { console.log('Server listening on port 8080') });
    })
    .catch(err => {
        console.error('Error connecting to database:', err);
    });
//route MidelWare



//thVFkL1wHxNVCWrZ
//muslim