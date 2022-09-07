import createInflowsService from "../services/inflows/createInflows.service";
import listInflowsService from "../services/inflows/listInflows.service";
import updateInflowsService from "../services/inflows/updateInflws.service";
import deleteInflowsService from "../services/inflows/deleteInflows.service";

class InflowsController {
    constructor(){}
    
    async getInflow(req, res){
        const { id } = req.query;
        const service = new listInflowsService();
        const inflow = await service.listInflows(id);
        res.status(inflow.status).json({
            message: inflow.message
        })
    }

    async postInflow(req, res){
        const { name, description, value } = req.body;
        const service = new createInflowsService();
        const inflow = await service.createInflows( name, description, value);
        res.status(inflow.status).json({
            message: inflow.message
        })

    }

    async putInflow(req, res){
        const { name, description, value } = req.body;
        const { id } = req.params;
        const service = new createInflowsService();
        const inflow = await service.createInflows( id, name, description, value);
        res.status(inflow.status).json({
            message: inflow.message
        })

    }

    async deleteInflow(req, res){
        const { id } = req.params;
        const service = new deleteInflowsService();
        const inflow = await service.deleteInflows(id);
        res.status(inflow.status).json({
            message: inflow.message
        })

    }
}

export default new InflowsController();