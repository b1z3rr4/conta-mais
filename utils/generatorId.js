const uuidv4 = require('uuid');

function generatorId(){
    const id = uuidv4();
    return id;
}

module.exports = generatorId;