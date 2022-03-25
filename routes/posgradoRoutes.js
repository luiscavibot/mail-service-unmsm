const { Router } = require('express');

const {
	posgradoMailingController,
	posgradoMailingDosController,
} = require('../controllers/posgradoControllers');

const router = Router();

router.post('/informacion-contacto-desde-home', posgradoMailingController);
router.post(
	'/informacion-programa-desde-programa',
	posgradoMailingDosController
);

module.exports = router;
