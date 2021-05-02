const express = require('express');

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.originalUrl);
    next();
})
app.use(express.urlencoded())
app.use(express.static('./static'));

app.post('/good-form', (req, res) => {
    console.log(req.body)
    res.redirect(303, '/');
})

app.post('/bad-form', (req, res) => {
    console.log(req.body)
    res.sendStatus(201);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
