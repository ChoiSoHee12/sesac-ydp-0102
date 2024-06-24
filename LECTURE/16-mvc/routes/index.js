const express = require('express');
const controller = require('../controller/Cmain');
// const { getMain, getComments, getComment } = require('../controller/Cmain');
const router = express.Router();

console.log('---- routes/index.js ----');
console.log(controller);

// 기본 요청 주소: "localhost:PORT"

router.get('/', controller.getMain);
// router.get('/', { getMain });

router.get('/comments', controller.getComments);
// router.get('/comments', { getComments });

router.get('/comment/:id', controller.getComment);
// router.get('/comment/:id', { getComment });

module.exports = router;