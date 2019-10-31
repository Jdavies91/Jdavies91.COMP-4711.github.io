const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./Model/database');

mongoose.connect('mongodb+srv://jon:Not4you%23%21@cluster0-w7esk.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
    }
);

const app = express();
// console.log(path.join(__dirname,'public'))

app.set('view engine', 'pug');
let routes = require('./routes/gameplay');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json({limit: '2mb'}));



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(routes);
app.listen(3000, function(){
    console.log('Server started on port 3000.....');
});