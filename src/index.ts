import 'reflect-metadata';
import express from 'express';
import { Request, Response } from 'express';

import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req: Request, res: Response) => {
	res.send('<h1>Helloooo World</h1>')
})

app.listen(3000, () => {
	console.log('It\'s Running');
});