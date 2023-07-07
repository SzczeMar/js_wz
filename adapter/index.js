import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import level from 'level';
import { createFSAdapter } from './fs-adapter.js';

const __dirname = dirname(fileURLToPath(import.meta.url))
const db = level(join(__dirname, 'db'), {
    valueEncoding: 'binary'
})
const fs = createFSAdapter(db);

fs.writefile('hello.txt', 'Hello World!', () => {

    fs.readfile('hello.txt', { encoding: 'utf8'}, (err, data) => {
        if (err) {
        return console.error(err);
    }
    console.log(data);
    })
})