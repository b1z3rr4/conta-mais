import * as yup from 'yup';
import cpfValidator from './cpfValidator.js';
class userValidator {
    constructor(){}

    async postValidator(req, res, next){
        let response = true;
        const schema = yup.object().shape({
            email: yup.string().strict().required('Email é obrigatório!').email('Formato de email inválido'),
            cpf: yup.string().strict().test(
                'test-invalid-cpf',
                'CPF inválido!',
                (cpf) => cpfValidator(cpf)
            ).required('CPF é obrigatório.'),
            password: yup.string().strict().required('Senha é obrigatória!').matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                `A senha precisa ter no mínimo 8 caracteres,`+ 
                ` uma letra maiúscula e uma letra minúscula,` + 
                ` um número e um caracter especial`)
        })

        await schema.validate(req.body).catch(err => {
            response = false;
            return res.status(400).json({
              error: err.errors
            })
        });

        if(response){
            next();
        } else {
            return
        }
    }

    async putValidator(req, res, next){
        let response = true;
        const schema = yup.object().shape({
            id: yup.string().strict(),
            email: yup.string().strict().required('Email é obrigatório!').email('Formato de email inválido'),
            cpf: yup.string().strict().test(
                'test-invalid-cpf',
                'CPF inválido!',
                (cpf) => cpfValidator(cpf)
            ),
        })

        await schema.validate(req.body).catch(err => {
            response = false;
            return res.status(400).json({
              error: err.errors
            })
        });

        if(response){
            next();
        } else {
            return
        }
    }

    async deleteValidator(req,res, next){
        let response = true;
        const schema = yup.object().shape({
           id: yup.string().strict().required('O id não foi passado!')
        })

        await schema.validate(req.params).catch(err => {
            response = false;
            return res.status(400).json({
              error: err.errors
            })
        });

        if(response){
            next();
        } else {
            return
        }
    }

    async getValidator(req,res, next){
        let response = true;
        const schema = yup.object().shape({
           id: yup.string().strict()
        })

        await schema.validate(req.body).catch(err => {
            response = false;
            return res.status(400).json({
              error: err.errors
            })
        });

        if(response){
            next();
        } else {
            return
        }
    }
}

export default new userValidator();