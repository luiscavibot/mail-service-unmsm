const {
	enviarCorreoConsultaDesdeHomePosgrado,
} = require('../helpers/enviarCorreo');

const posgradoMailingController = (req, res = response) => {
	const {
		areaInteres,
		programa,
		correoElectronico,
		nombreApellido,
		mensaje,
		asunto,
		autorizacion,
	} = req.body;

	const destinatario = 'lilyevantter@gmail.com';
	enviarCorreoConsultaDesdeHomePosgrado(
		areaInteres,
		programa,
		correoElectronico,
		nombreApellido,
		mensaje,
		asunto,
		destinatario,
		autorizacion
	).catch(console.error);

	res.json({
		mnsj: 'La información fue recibida correctamente en la App de correos',
	});
};

module.exports = {
	posgradoMailingController,
};
