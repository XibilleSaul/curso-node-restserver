const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.usuariosPath = '/api/usuarios';

        //Database Connection
        this.connectDB()

        // Midelwares 
        this.middlewares();

        // Routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }
    
    middlewares() {

        // CORS
        this.app.use( cors() );

        // read & parse body
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public') )

    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }

}

module.exports = Server;
