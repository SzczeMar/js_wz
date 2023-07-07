const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.get('/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = userResponse.data;

        const ordersResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/orders`);
        const orders = ordersResponse.data;

        const result = {
            ...user,
            orders
        };

        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => console.log(`Server started on port ${port}`));