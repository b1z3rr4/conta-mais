import app from './app.js';
import 'dotenv/config';

app.listen(process.env.PORT, ()=>{
    console.log('Server on running on port', process.env.PORT);
});