const express = require('express'); 
const dynamic = express(); 
const PORT = 8000; 

dynamic.set('view engine', 'ejs'); 
dynamic.set('views', './views'); 
dynamic.use(express.urlencoded({extended: true})); 
dynamic.use(express.json()); 

dynamic.get('/', (req, res) => {
    res.render('dynamic',{title: '동적 폼을 배워보자!'});
});

// ajax

dynamic.get('/ajax', (req, res) => {
// GET 방식이므로 브라우저에서 URL 쿼리까지 직접 입력해서도 값을 확인 가능
    // 
    // ex. http://localhost:8080/ajax?name=션&gender=남자
    console.log(req.query);
    res.send(req.query);

}) 

dynamic.post('/ajax', (req, res) => {
    console.log(req.body);
    res.send(req.bpdy);
})

// axios

app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.post('/axios', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

dynamic.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})