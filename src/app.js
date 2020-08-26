import express, { json } from 'express';
import morgan from 'morgan';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Importing routes
import testRoutes from "./routes/test";


//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/test', testRoutes);


export default app;