import { createServer } from 'http';
import staticHandler from 'serve-handler';
import ws from 'ws';

const server = createServer((req, res) => {
    return staticHandler(req, res, { public: 'www' })
})

const wss = new ws.Server({ server })
wss.on('connection', client => {
        console.log('client connected')
        client.on('message', msg => {
            console.log('message received: %s', msg)
            broadcast(msg)
        })
    })

    function broadcast(msg) {
        wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                client.send(msg)
            }
        })
    }

server.listen(process.argv[2] || 8080)

