const { deleteUsers, getUsers } = require('../../models/UserModel.js');

class deleteUserService {
    data;
    newData;
    actDelete;

    constructor(id){
        this.data = getUsers();
        this.newData = this.data.filter((item) => {
            return item.id !== id;
        });
        this.actDelete = deleteUsers(this.newData);
        return {
            status: "sucess"
        };
    }
}

module.exports = deleteUserService;