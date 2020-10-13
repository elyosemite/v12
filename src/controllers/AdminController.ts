import { Request, Response, NextFunction } from 'express';

import DatabaseService from '../services/DatabaseService';

let administrators = [
	{
		name: 'Palloma Melo',
		email: 'palloma@v8.com',
		description: 'Palloma has the function of lead a five people team in Development Environment.'
	},
	{
		name: 'Bia Fragoso',
		email: 'bia@v8.com',
		description: 'Bia has the function of lead a 4 people team in Development and Operations Environment.'
	},
	{
		name: 'Pricilla Cavalcante',
		email: 'pricilla@v8.com',
		description: 'Pricilla has the function of lead a 5 people team in Software Engineering.'
	}
];

export default {
	async index(req: Request, res: Response) {
		res.json(administrators);
	},

	async create(req: Request, res: Response) {
		const client = new DatabaseService();
		client.saveOneInstance({
			identifier: 1000,
			username: 'João Vitor'
		});
		res.send('We just save your client');
	}
}
