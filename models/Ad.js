const { Schema, model } = require('mongoose');

const adSchema = Schema({
    type: {
        type: String, 
        required: true,
        trim: true,
    },
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
    img: {
        type: String, 
        trim: true,

    },
});


module.exports = model('Ad', adSchema );