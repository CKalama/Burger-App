const express = require("express");

//Setting up router
var router = express.Router();

//Importing Burger.js (Which contains the burger model) and uses its database functions.
var burger = require("../models/burger.js");

//Setting up routes with logic
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("home", hbsObject);
    });
});

router.post("/api/burgers/", function (req, res){

    console.log('we hit the post route!!!', req.body)

    burger.create([
        "burger_name" , "devoured"
    ], [
        req.body.name, false
    ], function(result){
        // Send back the ID of the new quote
        res.json({ id: result.insertId})
    });
});

router.put("/api/burgers/:id", function(req, res){
    console.log('WE HIT HTE PUT ROUTE!!!')
    
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, function(result){
        if (result.changedRows == 0) {
            //If no rows were changed, it will send back a 404 because ID must not exist. 
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result){
        if(result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;