import express from 'express';
import routes from './routes/routes.js';
import db from './database';

class App {
    constructor(){
        this.server = express();
        this.initDatabase();
        this.middlewares()
        this.routes();
    }

    async initDatabase(){
        try {
            await db.authenticate;
            console.log("Conexão com o banco de dados realizada com sucesso");
        } catch (error) {
            console.log(
              "Não foi possível conectar ao banco de dados: ",
              error.message
            );
        }
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes.routesAuth);
        this.server.use(routes.routesUser);
    }
}

export default new App().server;