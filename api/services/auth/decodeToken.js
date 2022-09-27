import jwt from 'jsonwebtoken';

class Decode {
    constructor(){}

    async decodeToken(token) {
        const data = jwt.decode(token)
        return data;
    }
}

export default new Decode().decodeToken;