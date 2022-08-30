const { Router } = require("express");
const UserController = require('../../api/controllers/UserController.js');
const userValidator = require("../../api/middlewares/userValidator.js");
const idValidator = require("../../api/middlewares/idValidator.js");
const emailValidator = require("../../api/middlewares/emailValidator.js");

const routesUser = Router();

routesUser.get('/:id', userValidator.getValidator, idValidator, UserController.getUser);
routesUser.post('/', userValidator.postValidator, emailValidator, UserController.postUser);
routesUser.put('/:id', userValidator.putValidator, idValidator, UserController.putUser);
routesUser.delete('/:id', userValidator.deleteValidator, idValidator, UserController.deleteUser);

module.exports = routesUser;
