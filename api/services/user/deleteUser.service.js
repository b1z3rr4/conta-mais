import userRepository from "../../repositories/userRepository.js";

class deleteUserService {

    constructor(){}

    async deleteUser(id){
        this.repository = new userRepository();
        this.user = await this.repository.delete(id);
        if(this.user[0] === 1){
            return {
                status: 200,
                message: "Deletado com sucesso!"
            }
        } else {
            return {
                status: 400,
                message: "Não foi possível deletar o usuário"
            }
        }
    }
}

export default deleteUserService;