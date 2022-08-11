const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;

app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});