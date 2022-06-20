const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678'
})

con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');
  con.query('CREATE DATABASE express_db;', (err, result) => {
        if (err) throw err;
        console.log('database created!');
      })
  con.end();
})