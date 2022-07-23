import createUserService from '../services/user/createUser.service.js';
import updateUserService from '../services/user/updateUser.service.js';

class UserController {
    constructor(){}

    getUser(req, res){
        
    }

    postUser(req, res){
        const { email, cpf, password } = req.body;
        const user = new createUserService(email, cpf, password);
        res.send(user);
    }

    putUser(req, res){
        const { id } = req.params
        const { email, cpf, password } = req.body;
        const param = {
            email,
            cpf,
            password
        }
        const user = new updateUserService(id, param);
        res.send(user);
    }
}

export default new UserController();