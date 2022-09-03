import createUserService from '../services/user/createUser.service.js';
import updateUserService from '../services/user/updateUser.service.js';
import deleteUserService from '../services/user/deleteUser.service.js';
import listUserService from '../services/user/listUser.service.js';

class UserController {
    constructor(){}

    getUser(req, res){
        const { id } = req.params;
        const user = new listUserService(id);
        res.send(user);
    }
    //unica rota conectada com o banco é essa
    async postUser(req, res){
        //tem que pedir o nome
        const { name, email, cpf, password } = req.body;
        //se der merda, tem que mexer aqui
        const controller = new createUserService()
        const user = await controller.createUser(name, email, cpf, password);
        res.send(user);
    }
    
    putUser(req, res){
        const { id } = req.params;
        const { email, cpf } = req.body;
        const params = {
            email,
            cpf
        }
        const user = new updateUserService(id, params);
        res.send(user);
    }

    deleteUser(req, res){
        const { id } = req.params;
        const user = new deleteUserService(id);
        res.send(user);
    }
}

export default new UserController();