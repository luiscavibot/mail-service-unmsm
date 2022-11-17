const { Router } = require('express');

const {
	facultadesMailingController,
} = require('../controllers/facultadControllers');

const router = Router();

router.post('/', facultadesMailingController);

module.exports = router;
