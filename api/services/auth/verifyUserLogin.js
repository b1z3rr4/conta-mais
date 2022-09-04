import userRepository from "../../repositories/userRepository.js";
import encriptyPassword from '../../../utils/encriptyPassword';

class verifyUserLogin {
    
    constructor(){}

    async verifyUser(email, password){
        this.services = new userRepository();
        this.user = await this.services.getByEmail(email);
        this.hash = encriptyPassword(password);
        this.bool = this.user.length > 0 && this.hash === this.user[0].password_hash;
        return this.bool;
    }
}

export default verifyUserLogin;