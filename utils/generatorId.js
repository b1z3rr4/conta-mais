import {v4 as uuidv4 } from 'uuid';

class generator{
    constructor(){}
    generatorId(){
        const id = uuidv4();
        return id; 
    }
}

export default new generator().generatorId;