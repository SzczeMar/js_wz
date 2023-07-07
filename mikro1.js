const express = require('express');
const request = require('request');
const app = express();

app.get('/api/users/:id', (req, res) => {
    request('https://jsonplaceholder.typicode.com/users/' + req.params.id, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    }
    );
});

app.listen(3000, () => console.log('Server started on port 3000'));