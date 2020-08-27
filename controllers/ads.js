const { response } = require('express');
const Anuncio = require('../models/Anuncio');

const getAnuncios = async( req, res = response ) => {
    console.log('22');
    const anuncios = await Anuncio.find();


    res.json({
        ok: true,
        anuncios
    });
}

const crearAnuncio = async ( req, res = response ) => {

    const anuncio = new Anuncio( req.body );

    try {

        evento.user = req.uid;
        
        const anuncioGuardado = await anuncio.save();

        res.json({
            ok: true,
            ad: anuncioGuardado
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    getAnuncios,
    crearAnuncio,
}