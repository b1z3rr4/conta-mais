import { getUsers } from '../../models/UserModel.js';

class listUserService {
    constructor(id){
        const data = getUsers();
        const user = data.find((item)=>{
            return item.id === id;
        });
        return user;
    }
}

export default listUserService;
