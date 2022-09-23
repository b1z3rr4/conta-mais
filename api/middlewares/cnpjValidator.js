class cnpj{
    constructor(){}
    cnpjValidator(cnpj){
    const regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})/;
    return regex.test(cnpj);
    }
}

export default new cnpj().cnpjValidator;