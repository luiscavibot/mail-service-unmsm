const { Router } = require("express");

const {
  posgradoMailingController,
} = require("../controllers/posgradoControllers");

const router = Router();

router.post("/", posgradoMailingController);

module.exports = router;
