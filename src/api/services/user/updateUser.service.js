import encriptyPassword from "../../../../utils/encriptyPassword.js";
import { putUser} from "../../models/UserModel.js";

class updateUserService {
    constructor(id, param){
        const data = putUser();
        const userIndex = data.findIndex((item) => {
            return item.id === id;
        });
        const newUser = {
            id: data[userIndex].id,
            email: param.email || data[userIndex].email, 
            cpf: param.cpf || data[userIndex].cpf,
            password: encriptyPassword(param.password) || data[userIndex].password
        }

        data.splice(userIndex, 1, newUser);
        return data;
    }
}

export default updateUserService; 