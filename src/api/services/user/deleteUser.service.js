import { deleteUsers } from '../../models/UserModel.js';

class deleteUserService {
    constructor(id){
        const data = deleteUsers();
        const newData = data.filter((item) => {
            return item.id !== id;
        });
        return newData;

    }
}


export default deleteUserService;