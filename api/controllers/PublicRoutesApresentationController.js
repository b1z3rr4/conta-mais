import fs from 'fs';
import path from 'path';

class PublicRoutesApresentation {
    constructor(){}

    async documentation(req, res){
        const fileDir = path.resolve(__dirname, '..', '..', 'public', 'index.html')
        const page = fs.readFileSync(fileDir, 'utf-8');
        res.setHeader('Content-type', 'text/html');
        res.status(200).send(page);
    }
}

export default new PublicRoutesApresentation();