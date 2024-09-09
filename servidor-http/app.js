const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

//app.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'indexj.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'sobre.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});