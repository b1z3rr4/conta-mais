const app = require('./app.js');
require('dotenv').config();

app.listen(process.env.PORT, ()=>{
    console.log('Server on running on port', process.env.PORT);
});