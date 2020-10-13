import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {

	index(req: Request, res: Response) {
		res.send({ userId: req.userId });
	}

	async create(req: Request, res: Response) {
		const repository = getRepository(User);
		const { email, password } = req.body;

		const userExists = await repository.findOne({ where: { email } });
		
		if(userExists) {
			return res.sendStatus(409); //Conflit - There is already an user
		}

		const user = repository.create({ email, password });
		await repository.save(user);
		return res.json(user);
	}

	async update(req: Request, res: Response) {
		const repository = getRepository(User);
		const { id, email } = req.body;

		const userExists = await repository.findOne({ where: { id } });
		
		if(!userExists) {
			return res.sendStatus(409);
		}

		await repository.update({ id: userExists.id }, { email: email });
		console.log(res);
		return res.sendStatus(200);
	}
}

// Singleton Pattern applied
export default new UserController();
