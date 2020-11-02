const express = require("express");

//Setting up router
var router = express.Router();

//Importing Burger.js (Which contains the burger model) and uses its database functions.
var burger = require("../models/burger.js");

//Setting up routes with logic
router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers:data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});