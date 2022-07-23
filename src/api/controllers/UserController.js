import createUserService from '../services/user/createUser.service.js'
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
}

export default new UserController();