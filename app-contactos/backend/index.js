import express from 'express';
import routes from './routes/routes.js';
const PORT = 4000;

const app = express();

app.use('/api', routes);

app.listen(PORT, ()=>{
    console.log(`Servidor Inicializado en el puerto # ${PORT}`);
});