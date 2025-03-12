const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});