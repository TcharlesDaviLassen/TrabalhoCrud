const express = require('express');
const path = require('path');
const PORT = 8080
const PATH_ = "index.html"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.listen(PORT, function()
{
    console.log(`Front online in http://localhost:${PORT}/${PATH_}`);
});
