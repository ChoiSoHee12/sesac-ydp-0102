const express = require('express');
const practice = express();
const PORT = 8000;

practice.set('view engine', 'ejs')
practice.set('views', './views')

practice.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})