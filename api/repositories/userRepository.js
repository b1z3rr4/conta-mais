// CRUD de usuários
import UserModel from '../models/UserModel.js';

class userRepository {
    constructor(){}

    async create(id, name, email, password_hash, cpf){
        this.user = await UserModel.create({
            id, name, email, password_hash, cpf
        })
        return this.user;
    }

    async get(id){
        //crud de pegar
    }

    async update(id, data){
        //crud de atualizar
    }

    async delete(id){
        //crud de excluir
    }
}

export default userRepository;