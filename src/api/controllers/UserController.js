import createUserService from '../services/user/createUser.service.js';
import deleteUserService from '../services/user/deleteUser.service.js';


class UserController {
    constructor(){}

    getUser(req, res){
        res.send('HI');
    }

    postUser(req, res){
        const { email, cpf, password } = req.body;
        const user = new createUserService(email, cpf, password);
        res.send(user);
    }

    //put

    deleteUser(req, res){
        const { id } = req.params;
         const user = new deleteUserService(id);
            res.send(user);
    }
}

export default new UserController();