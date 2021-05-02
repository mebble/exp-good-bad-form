const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.urlencoded())
app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.originalUrl, req.body);
    next();
})
app.use(express.static('./static'));

app.post('/good-form', (req, res) => {
    res.redirect(303, '/');
})

app.post('/bad-form', (req, res) => {
    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
