class cpf{
    constructor(){}
    cpfValidator(cpf){
        const regex = /([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/;
        return regex.test(cpf);
    }
}

export default new cpf().cpfValidator;