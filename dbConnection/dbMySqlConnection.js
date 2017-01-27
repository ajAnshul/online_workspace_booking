var fs = require('fs');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  // host     : '10.200.204.10',
  host:'localhost',
  user     : 'root',
  password : 'password',
  database : 'workbench'
});
module.exports = connection;
