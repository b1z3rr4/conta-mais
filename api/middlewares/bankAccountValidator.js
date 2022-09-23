import * as yup from 'yup';

class bankAccountValidator {
    constructor(){}

    async postValidator(req, res, next){
        let response = true;
        const schema = yup.object().shape({
            financial_institution: yup.string().strict(),
            cash: yup.number().strict(),
            limit: yup.number().strict(),
            id_business: yup.string().strict()
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
            financial_institution: yup.string().strict(),
            cash: yup.number().strict(),
            limit: yup.number().strict(),
            id_business: yup.string().strict()
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

export default new bankAccountValidator();