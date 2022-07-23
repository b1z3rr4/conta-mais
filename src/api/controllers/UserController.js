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

    deleteUser(req, res){
        const { id } = req.params;
         const user = new deleteUserService(id);
            res.send(user);

    }
}

export default new UserController();