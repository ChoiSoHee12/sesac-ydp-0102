const http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'})
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>최소희</h2>
    </body>
    </html>`)

}).listen(3000, () => {
    console.log('서버 실행')
});