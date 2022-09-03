import userRepository from "../../repositories/userRepository.js";

class listUserService {
    constructor(){}

    async listUsers(id){
        this.repository = new userRepository();
        if(id){
            this.users = await this.repository.get(id);
        } else {
            this.users = await this.repository.get();
        }
        
        if(this.users.length > 1){
            return {
                status: 200,
                message: this.users
            }
        } else {
            return {
                status: 404,
                message: "Nada encontrado!"
            }
        }
    }
}

export default listUserService;
