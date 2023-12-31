import http from 'http';
import url from 'url';

const host = 'localhost';
const port = process.env.PING_LISTEN_PORT ?? 8000;

const server = http.createServer(function(req:any, res:any) //d
{
    if(req.url === '/ping')
    {
        let url = new URL ("http://localhost:8000");
        console.log(url.host);
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(req.headers, null, 2));
    }
    else
    {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end();
    }
})

server.listen(port, () => {
    console.log('Server is running on http://' + host + port);
})