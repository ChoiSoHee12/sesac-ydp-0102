const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app); // http 서버
const io = socketIO(server); // socket 서버

// 미들웨어
app.set('view engine', 'ejs');

// 라우터
app.get('/', (req, res) => {
    res.render('client');
})

io.on('connection', (socket) => {
    // socket : 접속한 웹 브라우저
    // io : 접속해 있는 모든 웹 브라우저
    // 웹 브라우저가 접속이 되면 고유한 id 값이 생성됨.
    // ==> socket.id 로 확인 가능.
    console.log("서버 연결 완료 ::" , socket.id);
})


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})