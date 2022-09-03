import verifyUserLogin from '../services/auth/verifyUserLogin.js';

class AuthController {
    
    constructor(){}

    async login(req, res) {
        const { email, password } = req.body;
        const services = new verifyUserLogin();
        const user = await services.verifyUser(email, password);
        res.json(user);
    }

    logout(req, res) {

    }
}

export default new AuthController;