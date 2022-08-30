const createUserService = require('../services/user/createUser.service.js');
const updateUserService = require('../services/user/updateUser.service.js');
const deleteUserService = require('../services/user/deleteUser.service.js');
const listUserService = require('../services/user/listUser.service.js');

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

module.exports = new UserController();