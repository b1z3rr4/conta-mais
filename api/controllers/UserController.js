import createUserService from '../services/user/createUser.service.js';
import updateUserService from '../services/user/updateUser.service.js';
import deleteUserService from '../services/user/deleteUser.service.js';
import listUserService from '../services/user/listUser.service.js';

class UserController {
    constructor(){}
    
    async getUser(req, res){
        const { id } = req.query;
        const services =  new listUserService();
        let users;
        if(id){
            users = await services.listUsers(id);
        } else {
            users = await services.listUsers();
        }
        res.status(users.status).json(users.message);
    }
    
    async postUser(req, res){
        const { name, email, cpf, password } = req.body;
        const services = new createUserService()
        const user = await services.createUser(name, email, cpf, password);
        res.status(user.status).json(user.message);
    }
    
    async putUser(req, res){
        const { id } = req.params;
        const { name, email, cpf } = req.body;
        const params = {
            name,
            email,
            cpf
        }
        const services = new updateUserService()
        const user = await services.updateUser(id, params);
        res.status(user.status).json(user.message);
    }
    
    async deleteUser(req, res){
        const { id } = req.params;
        const services = new deleteUserService()
        const user = await services.deleteUser(id);
        res.status(user.status).json(user.message);
    }
}

export default new UserController();