const encriptyPassword = require("../../../utils/encriptyPassword.js");
const generatorId = require("../../../utils/generatorId.js");
const { UserModel, postUser } = require('../../models/UserModel.js');

class createUserService {
    id;
    hashPass;
    user;

    constructor(email, cpf, passowrd){
        this.id = generatorId();
        this.hashPass = encriptyPassword(passowrd);
        this.user = new UserModel(this.id, email, cpf, this.hashPass);
        postUser(this.user);
        return {
            id: this.user.id,
            email: this.user.email,
            cpf: this.user.cpf
        };
    }
}

module.exports = createUserService;