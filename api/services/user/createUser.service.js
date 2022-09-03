import encriptyPassword from "../../../utils/encriptyPassword.js";
import generatorId from "../../../utils/generatorId.js";
import UserModel from '../../models/UserModel.js';

class createUserService {
    id;
    hashPass;
    user;
    //se der merda mexe aqui
    constructor(){}

    async createUser(name, email, cpf, passowrd){
        this.id = generatorId();
        this.hashPass = encriptyPassword(passowrd);
        this.user = await UserModel.create({
            id: this.id, 
            name, 
            email, 
            password_hash: this.hashPass, 
            cpf
        });
        return this.user
    }
}

export default createUserService;