// MySQL 모듈 불러오기
const mysql = require('mysql');
// Express 모듈 불러오기
const express = require('express')
const app = express()
const port = 3000

// bodyParser 적용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SQL Connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'express_db'
})
  
// DB에 데이터 추가하기
app.post('/insert', (req, res) => {
    const name = req.body.name;
    console.log(name)
    con.query(`INSERT INTO users (name) VALUES ('${name}');`, (err, rows, field) => {
        if(err) throw err;
        res.send(rows);
    });
});
// DB에서 id로 데이터 삭제하기
app.post('/delete', (req, res) => {
    const id = req.body.id;
    con.query(`DELETE FROM users Where id=${id};`, (err, rows, field) => {
        if(err) throw err;
        res.send(rows);
    });
});
// DB의 데이터 수정하기
app.post('/update', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    con.query(`Update users SET name='${name}' WHERE id=${id};`, (err, rows, field) => {
        if(err) throw err;
        res.send(rows);
    });
});
// DB 전체 읽기
app.get('/select', (req, res) => {
    con.query('SELECT * FROM users;', (err, rows, field) => {
        if(err) throw err;
        res.send(rows);
    });
})
// 메인 화면
app.get('/', (req, res) => {
    res.send('MySQL CRUD Example')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});