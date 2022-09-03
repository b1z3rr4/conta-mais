import 'dotenv/config';
import jwt from 'jsonwebtoken';

async function authValidate(req, res, next){
    const authKey = req.headers['authKey'];
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

export default authValidate;