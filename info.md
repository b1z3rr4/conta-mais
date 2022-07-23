# Linha do tempo de execução

server.js -- app.js -- /routes -- /controllers -- /services -- /models -- banco de dados

## Arquitetura base para projetos

        projeto
        |-- config
            |-- bdd.js
        |-- src
            |-- api
                |-- controllers
                |-- services
                |-- models
                |-- middlewares
            |-- app.js
            |-- server.js
        |-- routes
            |-- routes.js
            |-- user
                |-- UserRoutes.js
            |-- company
                |-- CompanyRoutes.js
