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

  const destinatario = "lilyevantter@gmail.com";
  enviarCorreoConsultaDesdeHomePosgrado(
    areaInteres,
    programa,
    correoElectronico,
    nombreApellido,
    mensaje,
    asunto,
    destinatario
  ).catch(console.error);

  res.json({ mnsj: "Mensaje enviado" });
};

module.exports = {
  posgradoMailingController,
};
