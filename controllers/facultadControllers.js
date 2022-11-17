const { sendMailToResponsable } = require('../helpers/sendMail');

const facultadesMailingController = (req, res = response) => {
	const {
		userNames,
		userMail,
		userSubject,
		userMessage,
		responsableMail,
		facultad,
		escuela,
		templateType,
	} = req.body;

	try {
		sendMailToResponsable(
			userNames,
			userMail,
			userSubject,
			userMessage,
			responsableMail,
			facultad,
			escuela,
			templateType
		);
		res.json({
			mnsj: 'La información fue recibida correctamente en la App de correos',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Hable con el administrador',
			error,
		});
	}
};

module.exports = {
	facultadesMailingController,
};
