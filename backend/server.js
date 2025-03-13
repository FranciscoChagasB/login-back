const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes.js');
const editoraRoutes = require('./src/routes/editoraRoutes.js')
const cors = require("cors");

const app = express();

// Configurar CORS
app.use(cors({
    origin: "*", // Permite requisições de qualquer origem (para desenvolvimento)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/editoras', editoraRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});