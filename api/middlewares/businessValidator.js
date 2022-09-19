import * as yup from 'yup';
import cnpjValidator from "./cnpjValidator"

class businessValidator {
    constructor(){}

    async postValidator(req, res, next){
        let response = true;
        const schema = yup.object().shape({
            cnpj: yup.string().strict().test(
                'test-invalid-cnpj',
                'CNPJ inválido!',
                (cnpj) => cnpjValidator(cnpj)),
            company: yup.string().strict(),
            bank_stock: yup.number().strict(),
            user_id: yup.string().strict()
        });

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
            cnpj: yup.string().strict().test(
                'test-invalid-cnpj',
                'CNPJ inválido!',
                (cnpj) => cnpjValidator(cnpj)),
            company: yup.string().strict(),
            bank_stock: yup.number().strict(),
            user_id: yup.string().strict()
        });

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

        await schema.validate(req.query).catch(err => {
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

export default new businessValidator();