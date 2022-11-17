const {
	contactFormFromFormacionAcademica,
} = require('../mailTemplates/contactFormFromFormacionAcademica');

const chooseTemplate = (templateType) => {
	if ((templateType = 'formacion-academica')) {
		return contactFormFromFormacionAcademica;
	}
};
module.exports = { chooseTemplate };
