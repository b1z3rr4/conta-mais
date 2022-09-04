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

    async getById(id){
        if(id){
            this.user = await UserModel.findAll({
                where: {
                    id: id
                }
            }) 
        } else {
            this.user = await UserModel.findAll() 
        }
        return this.user;
    }

    async getByEmail(email){
        this.user = await UserModel.findAll({
            where: {
                email: email
            }
        })
        return this.user;
    }

    async update(id, obj){
        this.user = await UserModel.update( obj, {
            where: {
              id: id
            }
        })
        return this.user;
    }

    async delete(id){
        this.user = await UserModel.destroy({
            where: {
                id: id
            }
        })
        return this.user;
    }
}

export default userRepository;