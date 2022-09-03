import encriptyPassword from "../../../utils/encriptyPassword.js";
import generatorId from "../../../utils/generatorId.js";
import userRepository from "../../repositories/userRepository.js";

class createUserService {
    id;
    hashPass;
    user;
    constructor(){}

    async createUser(name, email, cpf, passowrd){
        this.id = generatorId();
        this.hashPass = encriptyPassword(passowrd);
        this.repository = new userRepository();
        this.user = await this.repository.create(this.id, name, email, this.hashPass, cpf);
        return this.user
    }
}

export default createUserService;