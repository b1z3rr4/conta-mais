export class UserModel {
    id;
    email;
    cpf;
    password;

    constructor(id, credentials, password){
        this.id = id;
        this.email = credentials.email || undefined;
        this.cpf = credentials.cpf || undefined;
        this.password = password;
    }
}
    export function putUser() {
        const user = [
            {id: "1234",
            email: "dadomocado@gmail.com",
            cpf: 12345678,
            password: "senhateste123"},
            {id: "4321",
            email: "dadomocado@gmail.com",
            cpf: 12345678,
            password: "senhateste123"},
        
        ]
        return user;
}



/* Criamos uma classe para representar o objeto padrão de usuário,
para futuramente implemetá-lo no banco de dados, com as seguintes informações:
email, cpf e password - sendo email do tipo string, cpf do tipo number e password do tipo string
Na função contrutora receberemos dois parametros: 
Um objeto com nome "credentials" que virá com duas chaves ou apenas uma sendo elas
email do tipo string e cpf do tipo number.
O usuário pode escolher se vai utilizar email ou cpf, devido a isso, caso uma dessas informações
do "credentials" não seja passada ela será definida com "undefined".
*/