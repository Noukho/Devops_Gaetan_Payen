"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const host = 'localhost';
const port = (_a = process.env.PING_LISTEN_PORT) !== null && _a !== void 0 ? _a : 8000;
const server = http_1.default.createServer(function (req, res) {
    if (req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers, null, 2));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end();
    }
});
server.listen(port, () => {
    console.log('Server is running on http://' + host + port);
});
