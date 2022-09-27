import createMovimentsService from "../services/moviments/createMoviments.service";
import listMovimentsService from "../services/moviments/listMoviments.service";
import updateMovimentsService from "../services/moviments/updateMoviments.service";
import deleteMovimentsService from "../services/moviments/deleteMoviments.service";
import decodeToken from "../services/auth/decodeToken";

class MovimentsController {
	constructor() {}

	async getMoviment(req, res) {
		const { id } = req.query;
		const authorization = req.headers["authorization"];
		const token = authorization.split(" ")[1];
		const data = await decodeToken(token);
		const idToken = data.id;
		const service = new listMovimentsService();
		const moviment = await service.listMoviments(idToken, id);
		res.status(moviment.status).json({
			message: moviment.message,
		});
	}

	async postMoviment(req, res) {
		const { name, description, value, type, id_bankAccount } = req.body;
		const service = new createMovimentsService();
		const moviment = await service.createMoviments(
			name,
			description,
			value,
			type,
			id_bankAccount
		);
		res.status(moviment.status).json({
			message: moviment.message,
		});
	}

	async putMoviment(req, res) {
		const { name, description, value, type } = req.body;
		const { id } = req.params;
		const service = new updateMovimentsService();
		const moviment = await service.updateMoviments(
			id,
			name,
			description,
			value,
			type
		);
		res.status(moviment.status).json({
			message: moviment.message,
		});
	}

	async deleteMoviment(req, res) {
		const { id } = req.params;
		const service = new deleteMovimentsService();
		const moviment = await service.deleteMoviments(id);
		res.status(moviment.status).json({
			message: moviment.message,
		});
	}
}

export default new MovimentsController();
