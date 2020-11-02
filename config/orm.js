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
}













module.exports = orm; 