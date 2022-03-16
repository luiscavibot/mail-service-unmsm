const { response, request } = require("express");
const nodemailer = require("nodemailer");

const user = process.env.APP_USER;
const pass = process.env.APP_PASS;

const enviarCorreoConsultaDesdeHomePosgrado = async (
  areaInteres,
  programa,
  correoElectronico,
  nombreApellido,
  mensaje,
  asunto,
  destinatario
) => {
  const userName = "✅ Dirección de Estudios de Posgrado";
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: `${user}`,
      pass: `${pass}`,
    },
  });
  await transporter.sendMail({
    from: `"${userName}"`, // sender address
    to: `${destinatario}`, // list of receivers
    subject: "Consulta desde web de Estudios de Posgrado", // Subject line
    html: `
    <p>Estimada, Unidad de Posgrado de la Facultad:</p>
    <p>El usuario&nbsp;<strong>${nombreApellido}</strong>&nbsp;ha consultado, a trav&eacute;s del sitio web de Estudios de Posgrado, lo siguiente:</p>
    <p><span style="color: #000080;"><em>PROGRAMA DE INTER&Eacute;S: ${programa}</em></span></p>
    <p><span style="color: #000080;"><em>ASUNTO: ${asunto}</em></span></p>
    <p><span style="color: #000080;"><em>CONTENIDO: ${mensaje}</em></span></p>
    <strong><p>Por favor, s&iacute;rvase a contestar esta consulta al siguiente correo:&nbsp;<a href="mailto:${correoElectronico}" target="_blank" rel="noopener">${correoElectronico}</a></p></strong>
    `, // html body
  });
};

module.exports = {
  enviarCorreoConsultaDesdeHomePosgrado,
};
