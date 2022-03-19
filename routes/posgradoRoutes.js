const { Router } = require('express');

const {
	posgradoMailingController,
} = require('../controllers/posgradoControllers');

const router = Router();

router.post('/informacion-contacto-desde-home', posgradoMailingController);

module.exports = router;
