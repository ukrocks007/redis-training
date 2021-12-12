const express = require('express');
const app = express();
const Redis = require("ioredis");
const redis = new Redis(6379);
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/name', async (req, res) => {
    let data = await redis.get('name');
    if (data) {
        res.status(200).send(data);
    } else {
        res.status(200).send('');
    }
});

app.post('/name', async (req, res) => {
    await redis.set('name', req.body.name);
    res.status(200).send(true);
});

app.listen(5000, (err) => {
    if (!err) {
        console.log("Started listening on port 5000.");
    } else {
        console.log(err);
    }
})