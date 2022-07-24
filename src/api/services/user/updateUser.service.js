import encriptyPassword from "../../../../utils/encriptyPassword.js";
import { UserModel, putUser, getUsers} from "../../models/UserModel.js";

class updateUserService {
    data;
    userIndex;
    newUser;
    newData;

    constructor(id, param){
        this.data = getUsers();
        this.userIndex = this.data.findIndex((item) => {
            return item.id === id;
        });
        this.newUser = new UserModel(
            this.data[this.userIndex].id,
            {
                email: param.email || this.data[this.userIndex].email, 
                cpf: param.cpf || this.data[this.userIndex].cpf
            }, encriptyPassword(param.password) || this.data[this.userIndex].password
        )
        this.data[this.userIndex] = this.newUser;
        this.newData = this.data;
        putUser(this.newData);
        return {
            email: this.newUser.email, 
            cpf: this.newUser.cpf
        };
    }
}

export default updateUserService;