const { response, request } = require('express');
const nodemailer = require('nodemailer');

const user = process.env.APP_USER;
const pass = process.env.APP_PASS;

const enviarCorreoConsultaDesdeHomePosgrado = async (
	areaInteres,
	programa,
	correoElectronico,
	nombreApellido,
	mensaje,
	asunto,
	destinatario,
	autorizacion
) => {
	const userName = '✅ Dirección de Estudios de Posgrado';
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
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
		subject: 'Consulta desde web de Estudios de Posgrado', // Subject line
		html: `
			<h4>Estimada, Unidad de Posgrado de la Facultad:</h4>
			<h4>El usuario&nbsp;<span style="color: #000080;"><strong>${nombreApellido}</strong>&nbsp;</span>ha consultado, a trav&eacute;s del sitio web de Estudios de Posgrado, lo siguiente:</h4>
			<table>
			<tbody>
			<tr>
			<td>
			<h4>Programa de inter&eacute;s:</h4>
			</td>
			<td>
			<p>${programa}</p>
			</td>
			</tr>
			<tr>
			<td>
			<h4>Asunto:</h4>
			</td>
			<td>
			<p>${asunto}</p>
			</td>
			</tr>
			<tr>
			<td>
			<h4>Mensaje:</h4>
			</td>
			<td>
			<p>${mensaje}</p>
			</td>
			</tr>
			</tbody>
			</table>
			${
				autorizacion
					? `<p>*El usuario autoriza recibir informaci&oacute;n sobre los programas acad&eacute;micos de Posgrado de la universidad.</p>`
					: ''
			}
			<h4>&nbsp;</h4>
			<h4>Por favor, s&iacute;rvase a contestar esta consulta al siguiente correo:&nbsp;<a href="mailto:${correoElectronico}" target="_blank" rel="noopener">${correoElectronico}</a></h4>
			<h4>Saludos cordiales.</h4>
			<p>&nbsp;</p>
			<h4><span style="color: #000080;"><em>Aplicaci&oacute;n de correos autom&aacute;ticos de la OGII.</em></span></h4>
			<h4><span style="color: #000080;"><em>Direcci&oacute;n General de Estudios de Posgrado.</em></span></h4>
    	`, // html body
	});
};

module.exports = {
	enviarCorreoConsultaDesdeHomePosgrado,
};
