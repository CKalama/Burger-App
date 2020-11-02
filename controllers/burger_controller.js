const express = require("express");

//Setting up router
var router = express.Router();

//Importing Burger.js (Which contains the burger model) and uses its database functions.
var burger = require("../models/burger.js");

//