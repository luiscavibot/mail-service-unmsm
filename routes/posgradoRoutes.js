
const { Router } = require('express');

const { PosgradoMailingController } = require('../controllers/usuarios');

const router = Router();


router.post('/', usuariosPost );


module.exports = router;