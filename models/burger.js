var orm = require("../config/orm.js");


//How to interact with the model within the database. 
var burger = {
    all:function(cb) {
        orm.all("burgers", function(result) {
            cb(result);
        });
    },
    //Variables for Col and vals are arrays!!!
    
}



module.exports = burger;