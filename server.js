// const mysql = require('mysql');
const express = require('express');
var exphbs  = require('express-handlebars');

var port = process.env.PORT || 3000


var app = express();

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Setting Handlebars  
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
// app.get('/', function (req, res) {
    
//     var hbsObject = {
//         burgers: [{name: 'blue cheese', id:1, devoured:false}, {name: 'bacon cheese', id:2, devoured:false}, {name:"BLT", id:3, devoured:true}]
//     }
//     console.log(hbsObject);
//     res.render('home', hbsObject);
// });


var routes = require('./controllers/burger_controller')
app.use(routes);
 
app.listen(port, function() {
    console.log("Server listening at http://localhost:" + port);
});
