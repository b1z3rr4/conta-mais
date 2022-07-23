import encriptyPassword from "../../../../utils/encriptyPassword.js";
import generatorId from "../../../../utils/generatorId.js";
import { UserModel } from '../../models/UserModel.js';

class createUserService {
    id;
    hashPass;
    user;

    constructor(email, cpf, passowrd){
        this.id = generatorId();
        this.hashPass = encriptyPassword(passowrd);
        this.user = new UserModel(this.id, {email: email, cpf: cpf}, this.hashPass);
        return {
            email: this.user.email,
            cpf: this.user.cpf
        };
    }
}

export default createUserService;