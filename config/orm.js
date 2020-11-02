var connection = require("../config/connection.js");


//The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
          // if string with spaces, add quotations (American Cheese => 'American Cheese')
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          // e.g. {name: 'Pepper Jack'} => ["name='Pepper Jack'"]
          // e.g. {devoured: true} => ["devoured=true"]
          arr.push(key + "=" + value);
        }
      }

      return arr.toString();
}

//CRUD SQL STATEMENT FUNCTIONS
var orm = {
    //To grab any inputs
    all:function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    //To create a new column with values 
    create:function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function (err,result) {
        if(err) {
            throw err
        }

        cb(result);

    })

    },
    // An example of objColVals would be {burger_name: Greek, devoured: true}
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition; 

        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        })

  }, 
    delete: function(table, conditon, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += "WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
            if (err) {
            throw err; 
            }
            cb(result);
        });
    }
}


module.exports = orm; 