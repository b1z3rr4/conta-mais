import app from './app.js';
import 'dotenv/config';

app.get('/', (req, res)=>{
    res.send('<h1>Oi</h1>');
});

app.listen(3004, ()=>{
    console.log('Server on running on port', 3004);
});