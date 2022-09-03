/*import { getUsers } from '../models/UserModel.js';

function idValidator(req, res, next){
    const { id } = req.params;
    const data = getUsers();
    const user = data.find((item)=>{
        return item.id === id
    })
    if(!user){
        return res.status(400).json({
            status: 'Usuário não encontrado!'
        })
    }
    next();
}

export default idValidator;*/