const express = require('express');
const app = express();
const port = 3000;

const validateRequest = (req, res, next) => {
    if (!req.body.data) {
        res.status(400).send('Bad request');
    } else {
        next();
    }
};

const processData = (req, res, next) => {
    req.body.data = req.body.data.toLowerCase();
    next();
};

const saveData = (req, res) => {
    console.log(`Data received: ${req.body.data}`);
    res.send(`Data received: ${req.body.data}`);
}

app.use(express.json());
app.post('/data',validateRequest, processData, saveData);
app.listen(port, () => console.log(`Server started on port ${port}`));