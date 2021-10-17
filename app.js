const mongoose = require('mongoose');

//connecting to db
mongoose.connect('mongodb://localhost/army')
    .then(() => console.log('Connected to Mongodb..'))
    .catch(err => console.log('Could not connect to Mongodb.. ', err));

//loading express modules
const express =  require('express');
const app = express();
const saveDb = require('./routes/save');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', saveDb)
//to load css files
app.use(express.static(__dirname + '/static'));
 
//PORT Environment var
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));


