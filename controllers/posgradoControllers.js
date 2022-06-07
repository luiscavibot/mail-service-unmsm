const {
	enviarCorreoConsultaDesdeHomePosgrado,
	enviarCorreoConsultaDesdePrograma,
} = require('../helpers/enviarCorreo');

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
	const { programa, correo } = req.body;
	console.log(programa, correo);
	const destinatario = 'lilyevantter@gmail.com';
	enviarCorreoConsultaDesdePrograma(programa, correo, destinatario).catch(
		console.error
	);

	res.json({
		mnsj: 'La información fue recibida correctamente en la App de correos',
	});
};

module.exports = {
	posgradoMailingController,
	posgradoMailingDosController,
};
