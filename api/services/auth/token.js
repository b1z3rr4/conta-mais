import 'dotenv/config';
import jwt from 'jsonwebtoken';
import userRepository from '../../repositories/userRepository.js';

class token{
    constructor(){}
    async generateToken(email){
        const repository = new userRepository();
        const user = await repository.getByEmail(email); 
        const secret = process.env.SECRET
        try {
            const token = jwt.sign({
                id: user[0].id,
                email: user[0].email,
                cpf: user[0].cpf
            }, secret, {
                expiresIn: '1h'
            })
            return token
        } catch (e){
            console.log(e)
            return 'Não foi possível gerar o token!'
        }
    }
}


export default new token().generateToken;