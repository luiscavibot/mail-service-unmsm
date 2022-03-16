const { response, request } = require("express");
const nodemailer = require("nodemailer");

const enviarCorreoConsultaDesdeHomePosgrado = async (
  areaInteres,
  programa,
  correoElectronico,
  nombreApellido,
  mensaje,
  asunto
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "lcastillov123@gmail.com",
      pass: "kmsvhyweqqqqlcdf",
    },
  });
  await transporter.sendMail({
    from: '"Luis Castillo 👻" <lcastillov123@gmail.com>', // sender address
    to: "lilyevantter@gmail.com", // list of receivers
    subject: "Hola mundo ✔", // Subject line
    html: "<b>Hello world asdasdasd?</b>", // html body
  });
};

module.exports = {
  enviarCorreoConsultaDesdeHomePosgrado,
};
