const fs = require('fs');
// console.log(fs);

// 디렉토리 생성

// fs.mkdir(path, mode, callback) => 형식
const path = require('path')
// fs.mkdir(path.join(__dirname, 'trst'), (err) => {
//     if(err) {
//         return console.error(err)
//     }
//     onsole.log('디렉토리 생성완료');
// })

// 디렉토리 삭제

fs.rmkdir(path.join(__dirname, 'trst'), (err) => {
    if(err) {
        return console.error(err)
    }
    onsole.log('디렉토리 식제완료');
})
