const {
	enviarCorreoConsultaDesdeModalFacultad,
} = require('../helpers/enviarCorreo');

const facultadesMailingController = (req, res = response) => {
	const {
		nombreApellido,
		correoElectronico,
		asunto,
		mensaje,
		autorizacion,
		correoContacto,
		nombreFacultad,
		nombreEscuela
	} = req.body;
	// const destinatario = 'lilyevantter@gmail.com';

	try {

		enviarCorreoConsultaDesdeModalFacultad(
			nombreApellido,
			correoElectronico,
			asunto,
			mensaje,
			autorizacion,
			correoContacto,
			nombreFacultad,
			nombreEscuela
		)
	
		res.json({
			mnsj: 'La información fue recibida correctamente en la App de correos',
		});
	} catch (error) {
		res.status(500).json({
            msg: 'Hable con el administrador',
			error
        })
	}
	
};


module.exports = {
	facultadesMailingController,
};
