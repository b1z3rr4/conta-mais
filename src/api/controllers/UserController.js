import createUserService from '../services/user/createUser.service.js';
import listUserService from '../services/user/listUser.service.js';

class UserController {
    constructor(){}

    getUser(req, res){
        const { id } = req.params;
        const user = new listUserService(id);
        res.send(user);
    }

    postUser(req, res){
        const { email, cpf, password } = req.body;
        const user = new createUserService(email, cpf, password);
        res.send(user);
    }
}

export default new UserController();