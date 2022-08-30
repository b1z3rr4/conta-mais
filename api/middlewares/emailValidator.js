const { getUsers } = require('../models/UserModel.js');

function emailValidator(req, res, next){
    const { email } = req.body;
    const data = getUsers();
    const user = data.find((item)=>{
        return item.email === email
    })
    if(user){
        return res.status(400).json({
            status: 'Email já cadastrado!'
        })
    }
    next();
}

module.exports = emailValidator
