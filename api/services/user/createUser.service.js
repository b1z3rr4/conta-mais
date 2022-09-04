import encriptyPassword from "../../../utils/encriptyPassword.js";
import generatorId from "../../../utils/generatorId.js";
import userRepository from "../../repositories/userRepository.js";

class createUserService {
    
    constructor(){}

    async createUser(name, email, cpf, passowrd){
        try {
            this.id = generatorId();
            this.hashPass = encriptyPassword(passowrd);
            this.repository = new userRepository();
            this.user = await this.repository.create(this.id, name, email, this.hashPass, cpf);
            return {
                status: 200,
                message: this.user
            }
        } catch(e){
            return {
                status: 400,
                message: e.errors[0].message
            }
        }
    }
}

export default createUserService;