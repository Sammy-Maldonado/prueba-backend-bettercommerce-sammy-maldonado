import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

//Dependencias propias
import viewsRouter from './routes/views.router.js';
import communesRouter from './routes/communes.router.js';
import regionsRouter from './routes/regions.router.js'

//Dependencias de utilidades
import __dirname from './utils.js';

//Conexión al servidor
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));
const connection = mongoose.connect('mongodb+srv://CoderUser:123@cluster0.gfqujcv.mongodb.net/pruebatecnicasam?retryWrites=true&w=majority')

app.use(express.json())
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));

//Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/api/communes', communesRouter);
app.use('/api/regions', regionsRouter);
app.use('/', viewsRouter);