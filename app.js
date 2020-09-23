var express = require('express');


var router = express.Router();
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));


app.set("view engine", "ejs")

// ROUTING //
user = require('./routes/user')
app.get('/', user.home)

app.get('/user', user.getform)
app.post('/user', user.putform)

app.post('/feed', user.feedpost)

admin = require('./routes/admin')
app.get('/admin', admin.getview)
app.post('/admin', admin.putview)

app.listen(8080)
