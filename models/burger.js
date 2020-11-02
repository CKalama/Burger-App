var orm = require("../config/orm.js");


//How to interact with the model within the database. 
var burger = {
    all:function(cb) {
        orm.all("burgers", function(result) {
            cb(result);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(result){
            cb(result)
        })
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(result){
            cb(result);
        })
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(result){
            cb(result);
        })
    }
    //Variables for Col and vals are arrays!!!
    
}



module.exports = burger;
