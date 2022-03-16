const {
  enviarCorreoConsultaDesdeHomePosgrado,
} = require("../helpers/enviarCorreo");

const posgradoMailingController = (req, res = response) => {
  const {
    areaInteres,
    programa,
    correoElectronico,
    nombreApellido,
    mensaje,
    asunto,
  } = req.body;

  enviarCorreoConsultaDesdeHomePosgrado(
    areaInteres,
    programa,
    correoElectronico,
    nombreApellido,
    mensaje,
    asunto
  ).catch(console.error);

  res.json({ mnsj: "Mensaje enviado" });
};

module.exports = {
  posgradoMailingController,
};
