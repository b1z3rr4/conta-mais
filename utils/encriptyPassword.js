import crypto from 'crypto';
//import 'dotenv/config';

function encriptyPassword(password){
    const salt = process.env.SALT;
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash;
}

export default encriptyPassword;

/* 
    //serviço bancário
    senha --> dado sensível
    
    //mundo perfeito --> ninguem além do usuário sabe essa senha

    entra na plataforma --> digita a senha

    criou a conta
    natalia123 --> hdfkjahkd-jfhjshfhdlh-jfdlsjkfhjdhfjkkdfjd-kdjfkdj

    entrar na conta
    hdfkjahkd-jfhjshfhdlh-jfdlsjkfhjdhfjkkdfjd-kdjfkdj == hdfkjahkd-jfhjshfhdlh-jfdlsjkfhjdhfjkkdfjd-kdjfkdj

    //mundo nao perfeito
    sistema --> enem
    esqueci minha senha --> recuperar senha --> recuperar por email
    email? --> mandavam a senha no seu email.
*/