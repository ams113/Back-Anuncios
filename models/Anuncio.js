const { Schema, model } = require('mongoose');

const AnuncioSchema = Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    type: [{
        type: String, 
        enum: ['PISO', 'CHALET', 'VEHICULO','FRIGORIFICO'], 
        required: true
    }],
    description: {
        type: String,
    },
    size: {
        type: Number,
    },
    km: {
        type: Number,
    },
    color: {
        type: String,
    },
    fabricant: {
        type: String,
    },
    height: {
        type: Number,
    },
    score: {
        type: Number, default: 0,
    },
});


module.exports = model('Anuncio', AnuncioSchema );

    