import verifyUserLogin from '../services/auth/verifyUserLogin.js';
import generateToken from '../services/auth/token.js';

class AuthController {
    
    constructor(){}

    async auth(req, res) {
        let token;
        const { email, password } = req.body;
        const services = new verifyUserLogin();
        const user = await services.verifyUser(email, password);
        if(user){
            token = await generateToken(email)
            res.json(token);
            return
        }
        res.status(400).json({
            message: 'Not authorized!'
        })
    }
}

export default new AuthController;