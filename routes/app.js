const express = require('express');
//iniciar variables
const app = express();

app.get('/', (req, res, next) => {
    res.status(404).json({
        ok: true,
        msg: "Petición realizada correctamente"
    });
} );

module.exports = app;