const http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end(`<h2> hello. 최소희</h2>`)

}).listen(3000, () => {
    console.log('서버 실행')
});