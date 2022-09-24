import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import app from './app.js';
import 'dotenv/config';

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(process.env.PORT, ()=>{
    console.log('Server on running on port', process.env.PORT);
});