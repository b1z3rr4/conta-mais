import userRepository from "../../repositories/userRepository.js";

class updateUserService {

    constructor(){}

    async updateUser(id, obj){
        this.repository = new userRepository();
        this.user = await this.repository.update(id, obj);
        if(this.user[0] === 1){
            return {
                status: 200,
                message: 'Usuário atualizado com sucesso!'
            }
        } else {
            return {
                status: 400,
                message: 'Não foi possível atualizar o usuario.'
            }
        }
    }
}

export default updateUserService;