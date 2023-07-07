const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/service1/:id',async (req, res) => {
    try {
        const { data } = await axios.get(`http//localhost:3001/${req.params.id}`);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

app.get('/service2/:id',async (req, res) => {
    try {
        const { data } = await axios.get(`http//localhost:3002/${req.params.id}`);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => console.log(`Server started on port ${port}`));
