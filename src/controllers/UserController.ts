import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {

	async create(req: Request, res: Response) {
		const repository = getRepository(User);
		const { email, password } = req.body;

		const userExists = await repository.findOne({ where: { email } });
		
		if(userExists) {
			return res.sendStatus(409); //Conflit
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
			return res.sendStatus(404);
		}

		await repository.update({ id: userExists.id }, { email: email });
		return res.sendStatus(200);
	}

	async destroy(req: Request, res: Response) {
		const repository = getRepository(User);
		const id = req.params.id || req.body.id;

		const userExists = await repository.findOne({ where: { id } });

		if(!userExists) {
			return res.sendStatus(404);
		}

		await repository.delete([id]);
		return res.sendStatus(200);
	}

	async list(req: Request, res: Response) {
		const repository = getRepository(User);
		let users = await repository.find();
		
		if(!users) {
			return res.sendStatus(404);
		}

		users = users.map(element => {
			delete element.password;
			return element;
		})

		return res.json(users);
	}
}

export default new UserController();
