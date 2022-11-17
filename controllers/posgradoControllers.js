const {
	enviarCorreoConsultaDesdeHomePosgrado,
	enviarCorreoConsultaDesdePrograma,
} = require('../helpers/sendMail');

const posgradoMailingController = (req, res = response) => {
	const {
		areaInteres,
		programa,
		correoElectronico,
		nombreApellido,
		mensaje,
		asunto,
		correoContacto,
		autorizacion,
	} = req.body;
	console.log('req.body', req.body);
	// const destinatario = 'lilyevantter@gmail.com';

	enviarCorreoConsultaDesdeHomePosgrado(
		areaInteres,
		programa,
		correoElectronico,
		nombreApellido,
		mensaje,
		asunto,
		correoContacto,
		autorizacion
	).catch(console.error);

	res.json({
		mnsj: 'La información fue recibida correctamente en la App de correos',
	});
};

const posgradoMailingDosController = (req, res = response) => {
	const { programa, correo, correoContacto, tipoDePrograma } = req.body;

	enviarCorreoConsultaDesdePrograma(
		programa,
		correo,
		correoContacto,
		tipoDePrograma
	).catch(console.error);

	res.json({
		mnsj: 'La información fue recibida correctamente en la App de correos desde posgradoMailingDosController',
	});
};

module.exports = {
	posgradoMailingController,
	posgradoMailingDosController,
};
