import 'dotenv/config';
import jwt from 'jsonwebtoken';

class auth{
    constructor(){}
    async authValidator(req, res, next){
        const authKey = req.headers['authorization'];
        if(!authKey){
            res.status(400).json({message: 'Not authorized'})
            return;
        }    
        const token = authKey.split(' ')[1]
        const secret = process.env.SECRET
        try{
            jwt.verify(token, secret)
            next()
        } catch(e){
            console.log(e)
            res.status(400).json({message: 'Not authorized!'})
        }
    }
}



export default new auth().authValidator;