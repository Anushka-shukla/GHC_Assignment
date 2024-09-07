const ghcDb = require('./database');
const handleAbandonedCart = require('./handlers/handleAbandonedCart');
const handleOrderPlaced = require('./handlers/handleOrderPlaced');

const express = require('express');

const app = express();

const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    async () => {
        await ghcDb.sync();
        console.log(`server has sarted at ${PORT}`);
    }
)

app.post('/events', async (req, res) => {

    const { event } = req.body;
    const data = req.body.data;

    if (event === "cart_abandoned") {
        await handleAbandonedCart(data, event);

    }
    if (event === "order_placed") {
        await handleOrderPlaced(data);

    }
    res.send({
        success: true,

    })

});




