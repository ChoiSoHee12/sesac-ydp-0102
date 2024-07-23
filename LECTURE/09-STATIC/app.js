const express = require('express');
const path = require('path');
const app = express();
// app.set('view engine', 'ejs');
// app.set('views', './views');
//app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views', './views');
// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));;

app.get('/', (req,res)=>{
    res.render('index', {title :'Home'})
})
app.get('/about', (req,res)=>{
    res.render('about', {title :'About'})
})
app.get('/create', (req,res)=>{
    res.render('create', {title :'Create'})
})

app.get('/index2', (req,res)=>{
    res.render('index2', {title :'index2'})
})
//지정된 경로외 경로일 때
app.get((req,res)=>{
    res.status(404).rander('404')
})


app.listen(8000, () => {
    console.log(`http://localhost:8000`);
  });