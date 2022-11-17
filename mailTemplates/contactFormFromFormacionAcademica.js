const contactFormFromFormacionAcademica = ({
	escuela,
	userNames,
	userSubject,
	userMessage,
	userMail,
	facultad,
}) => {
	return `
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <div style="width:100%; background-color: #FFFFFF">
                <p style="color: #54626C;">Estimada, <span style="font-weight: bold;">Escuela de ${escuela}</span><p>
                <p style="color: #54626C;margin-bottom: 2rem;">El usuario <span style="font-weight: 700;">${userNames}</span> ha consultado, a traves del sitio web de la Facultad de ${facultad}, lo siguiente:</p>
                <div style="margin-bottom: 2rem;">
                    <div>
                        <div style="width: 100%; max-width:580px; background:rgba(84, 98, 108, .1); padding: 1.5rem; border-radius: 0.8rem; margin: auto; margin-bottom: .5rem;">
                            <p style="color: #0F314D; opacity:100%; margin-bottom: 1rem; margin-top: 0;"><span style="font-weight: 700;">Asunto: </span>${userSubject}</p>
                            <p style="color: #0F314D; margin-bottom: 0;"><span style="font-weight: 700;">Mensaje: </span>${userMessage}</p>
                        </div>
                        <p style="color: #0F314D; text-align: center; font-size: 14px; margin: 0; margin-bottom: 2rem;">
                            <span style="position: relative; top: 2px;">
                                <img src="https://unmsm-web-static-files.s3.sa-east-1.amazonaws.com/icono-info-azul-oscuro.png" alt="info" width="15" height="15" />
                            </span>
                            <span style="font-weight: 700;">Observacion:</span> El usuario autorizó recibir permanentemente informacion académica de la facultad
                        </p>
                    </div>

                    <div style="text-align: center;">
                        <p style="color: #0F314D; margin: 0; margin-bottom: .6rem;">Por favor, sírvase a contestar esta consulta al siguiente correo:</p>
                        <p style="color: #00518F; font-weight: 700; font-size: 20px; margin: 0; text-decoration: underline;">${userMail}</p>
                    </div>
                </div>
                <div style="color: #54626C;">
                    <p style="margin: 0; margin-bottom: 2rem;">Saludos cordiales,</p>
                    <p style="margin: 0; margin-bottom: .8rem; font-weight: 700;">Aplicación de correos automáticos</p>
                    <p style="margin: 0; margin-bottom: .8rem; font-weight: 700;">Oficina General de Imagen Institucional</p>
                </div>
            </div>
        </body>
    </html>
`;
};

module.exports = { contactFormFromFormacionAcademica };
