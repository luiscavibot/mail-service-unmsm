const express = require('express');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		// this.usuariosPath = '/api/usuarios';
		this.posgradoPath = '/api/posgrado';
		this.facultadesPath = '/api/facultades';

		// Middlewares
		this.middlewares();

		// Rutas de mi aplicación
		this.routes();
	}

	middlewares() {
		// CORS
		this.app.use(cors());

		// Lectura y parseo del body
		this.app.use(express.json());

		// Directorio Público
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use(this.posgradoPath, require('../routes/posgradoRoutes'));
		this.app.use(this.facultadesPath, require('../routes/facultadesRoutes'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor corriendo en puerto', this.port);
		});
	}
}

module.exports = Server;
