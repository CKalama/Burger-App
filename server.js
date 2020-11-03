// const mysql = require('mysql');
const express = require('express');
var exphbs  = require('express-handlebars');




var app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Setting Handlebars  
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    
    var hbsObject = {
        burgers: [{name: 'blue cheese', id:1}, {name: 'bacon cheese', id:2}]
    }
    console.log(hbsObject);
    res.render('home', hbsObject);
});

app.post('/api/burger', function (req, res) {

    // do conection.query and save req.body to the dB!!! u made a burger!!

});
 
app.listen(3000, function() {
    console.log("Server listening at http://localhost:" + 3000);
});

// app.get()


// res.render('home');