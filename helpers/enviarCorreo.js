const { response, request } = require('express');
const nodemailer = require('nodemailer');

// const user = process.env.APP_USER;
// const pass = process.env.APP_PASS;

const enviarCorreoConsultaDesdeModalFacultad = async (
	nombreApellido,
	correoElectronico,
	asunto,
	mensaje,
	autorizacion,
	correoContacto,
	nombreFacultad,
	nombreEscuela
) => {
	const userName = '✅ Dirección de Estudios de Posgrado';
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: `${process.env.APP_USER}`,
			pass: `${process.env.APP_PASS}`,
		},
	});
	await transporter.sendMail({
		from: `"${userName}"`, // sender address
		to: `${correoContacto}`, // list of receivers
		subject: `Consulta desde web de la Facultad de ${nombreFacultad}`, // Subject line
		html: `
			<html>
				<head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
				</head>
				<body>
					<div style="width:100%; background-color: #FFFFFF">
						<p style="color: #54626C;">Estimada, <span style="font-weight: bold;">Escuela de ${nombreEscuela}</span><p>
						<p style="color: #54626C;margin-bottom: 2rem;">El usuario <span style="font-weight: 700;">${nombreApellido}</span> ha consultado, a traves del sitio web de la Facultad de ${nombreFacultad}, lo siguiente:</p>
						<div style="margin-bottom: 2rem;">
							<div>
								<div style="width: 100%; max-width:580px; background:rgba(84, 98, 108, .1); padding: 1.5rem; border-radius: 0.8rem; margin: auto; margin-bottom: .5rem;">
									<p style="color: #0F314D; opacity:100%; margin-bottom: 1rem; margin-top: 0;"><span style="font-weight: 700;">Asunto: </span>${asunto}</p>
									<p style="color: #0F314D; margin-bottom: 0;"><span style="font-weight: 700;">Mensaje: </span>${mensaje}</p>
								</div>
								<p style="color: #0F314D; text-align: center; font-size: 14px; margin: 0; margin-bottom: 2rem;">
									<span style="position: relative; top: 2px;">
										<img src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/icono-info-azul-oscuro.png" alt="info" width="15" height="15" />
									</span>
									<span style="font-weight: 700;">Observacion:</span> El usuario autorizó recibir la informacion académica relacionada a la facultad
								</p>
							</div>

							<div style="text-align: center;">
								<p style="color: #0F314D; margin: 0; margin-bottom: .6rem;">Por favor, sírvase a contestar esta consulta al siguiente correo:</p>
								<p style="color: #00518F; font-weight: 700; font-size: 20px; margin: 0; text-decoration: underline;">${correoElectronico}</p>
							</div>
						</div>
						<div style="color: #54626C;">
							<p style="margin: 0; margin-bottom: 2rem;">Saludos cordiales,</p>
							<p style="margin: 0; margin-bottom: .8rem;">Aplicación de correos automático de la OGII</p>
							<p style="margin: 0; margin-bottom: .8rem;">Facultad de Nombre de facultad ${nombreFacultad}</p>
						</div>
					</div>
				</body>
			</html>
    	`, // html body
	});
};
const enviarCorreoConsultaDesdeHomePosgrado = async (
	areaInteres,
	programa,
	correoElectronico,
	nombreApellido,
	mensaje,
	asunto,
	correContacto,
	autorizacion
) => {
	const userName = '✅ Dirección de Estudios de Posgrado';
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: `${process.env.APP_USER}`,
			pass: `${process.env.APP_PASS}`,
		},
	});
	await transporter.sendMail({
		from: `"${userName}"`, // sender address
		to: `${correContacto}`, // list of receivers
		subject: 'Consulta desde web de Estudios de Posgrado', // Subject line
		html: `
			<h4>Estimada, Unidad de Posgrado de la Facultad de ${areaInteres}:</h4>
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
const enviarCorreoConsultaDesdePrograma = async (
	programa,
	correo,
	correoContacto,
	tipoDePrograma
) => {
	const userName = '✅ Dirección de Estudios de Posgrado';
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: `${process.env.APP_USER}`,
			pass: `${process.env.APP_PASS}`,
		},
	});
	await transporter.sendMail({
		from: `"${userName}"`, // sender address
		to: `${correo}`, // list of receivers
		cc: `${correoContacto}`,
		subject: `Brochure de ${tipoDePrograma} en ${programa} - UNMSM`, // Subject line
		html: `
			<p>Estimado(a) usuario(a) a continuación le adjuntamos el brochure solicitado:</p>
			<p>Puede comunicarse al siguiente correo para más consultas: <span>${correoContacto}</span></p>
			<i>No conteste este correo</i>
			`, // html body
	});
};
module.exports = {
	enviarCorreoConsultaDesdeModalFacultad,
	enviarCorreoConsultaDesdeHomePosgrado,
	enviarCorreoConsultaDesdePrograma,
};
