// // 디렉토리 읽기
// const fs = require('fs'); // 첫번째에 넣기로 약속
// fs.readdir('./', function(err, files) {
//     if(err) console.log("에러", err)
//     else console.log("결과는", files);
// }) 

//  1) 파일 생성
// fs.writeFile('mynewfile1.txt', 'Hello world', function(err){
//     if(err) throw err;
//     console.log('파일이 생성됨')
// })

// 2) open(), w를 이용해서 파일 생성
// fs.open('mynewfile2.txt','w', function(err, file){
//     if(err) throw err;
//     console.log('파일이 생성됨')
// }) //  -> 컨텐츠가 없이 빈 파일 

// 3) 파일생성 appendFile() 추가, 기존 파일을 전제.

fs.appendFile(`mynewfile1.txt`, "Choi", function(err) {
if(err) throw err;
console.log('파일이 생성됨');
})

// 파일 삭제
const fs = require('fs')
// fs.unlink('mynewfile2.txt', function() {
//     console.log('파일삭제 완료');

// })

// 파일이름 변경

fs.rename('mynewfile1.txt', 'renamefile1.txt', function(err) {
    if(err) throw err;

    console.log('파일 이름 변경 완료');
})