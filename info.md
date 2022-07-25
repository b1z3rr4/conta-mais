# Fluxo de trabalho do CRUD --- ok

server.js -- app.js -- /routes -- /controllers -- /services -- /models -- banco de dados
<-----------<----------<----------<---------------<------------<----------<-------------<

## Arquitetura base para projetos --- ok

        /projeto
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

### Validações

- Post
    Email precisa estar no formato "az@az.com".
    CPF precisa ter pelo menos 11 digitos.
    Senha precisa ter pelo menos 10 caracteres incluindo letras maiusculas e minusculas, numeros e simbolos.

- Get
    Precisa ter id para buscar um usuario especifico.

- Put
    Email precisa estar no formato "az@az.com".
    CPF precisa ter pelo menos 11 digitos.
    Senha precisa ter pelo menos 10 caracteres incluindo letras maiusculas e minusculas, numeros e simbolos.

- Delete
    Precisa passar id.

#### Tratamentos de erros

- Post
    Se os dados não forem passados corretamente, retornar um erro para cada paramentro.

- Get
    Retornar erro para caso o id passado não seja encontrado.
    Se o id não for passado deve retornar erro.

- Put
    Retornar erro para caso o id passado não seja encontrado.
    Se o id não for passado deve retornar erro.

- Delete
    Retornar erro para caso o id passado não seja encontrado.
    Se o id não for passado deve retornar erro.
