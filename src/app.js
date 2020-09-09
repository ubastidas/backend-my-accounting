import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Importing routes
import usersRoutes from "./routes/users";


//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

//routes
app.use('/api/users', usersRoutes);

export default app;
