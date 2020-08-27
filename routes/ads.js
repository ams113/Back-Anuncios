/*
    Anuncios Routes
    /api/ads
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
// const { validarJWT } = require('../middlewares/validar-jwt');
const { getAnuncios, crearAnuncio } = require('../controllers/ads');

const router = Router();

// Todas tienes que pasar por la validación del JWT
// router.use( validarJWT );


// Obtener eventos 
router.get('/', getAnuncios );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('id','El id es obligatorio').not().isEmpty(),
        check('type','El type es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearAnuncio
);

module.exports = router;