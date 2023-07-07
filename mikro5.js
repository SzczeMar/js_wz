const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(express.json());

const client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
let messageCollection;

client.connect(err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    const db = client.db('messages');
    messageCollection = db.collection('messages');
});

app.post('/message', async (req, res) => {
    try {
        const message = req.body;
        message.text = message.text.toLowerCase();
        await messageCollection.insertOne(message);
        res.send(`Message received: ${message.text}`);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));