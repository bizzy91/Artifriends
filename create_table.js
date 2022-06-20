const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'express_db'
})

const TABLE_name = 'users'
const query = `CREATE TABLE ${TABLE_name} (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL);`

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!')
    con.query(query, (err, result) => {
          if (err) throw err;
          console.log('table created!');
        })
    con.end();
  })