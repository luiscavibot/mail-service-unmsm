const { Router } = require('express');

const {
	facultadesMailingController,
} = require('../controllers/facultadControllers');

const router = Router();

router.post('/informacion-contacto-desde-escuela', facultadesMailingController);

module.exports = router;
