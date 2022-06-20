## MySQL 설치

Homebrew 로 MySQL 설치하기
```
$ brew install mysql
```

MySQL 시작하기
```
$ mysql.server start
```

MySQL 보안 설정
```
$ mysql_secure_installation
```
1. n
2. 비밀번호 입력/확인
3. y
4. y
5. n
6. y

사용하기
```
$ mysql -u root -p
```
---
## Express, mysql 설치
```
$ npm init -y
$ npm install express
$ npm install mysql
```
---
## DB 생성하기
```
$ node create_db.js
```
---
## TABLE 생성하기
```
$ node create_table.js
```
---
## Web Server
```
$ node app.js
```