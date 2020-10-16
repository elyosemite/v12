import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Admin from '../models/Admin';

class AdminController {

	async create(req: Request, res: Response) {
		const repository = getRepository(Admin);
		const { name, description, email, password, currentDate } = req.body;
		const adminExists = await repository.findOne({ where: { email } });

		if(adminExists) {
			return res.sendStatus(409);
		}

		const admin = repository.create({
			name, description, email, password, currentDate
		});
		await repository.save(admin);
		return res.sendStatus(200);
	}

	async update(req: Request, res: Response) {
		const repository = getRepository(Admin);
		const { idAdmin, name, description, email, password } = req.body;
		const adminExists = repository.findOne({ where: { idAdmin } });

		if(!adminExists) {
			return res.sendStatus(200);
		}

		await repository.update({ idAdmin: idAdmin }, {
			name, description, email, password
		});

		return res.sendStatus(200);

	}

	async destroy(req: Request, res: Response) {
		const repository = getRepository(Admin);
		const { idAdmin } = req.body;
		const adminExists = await repository.findOne({ where: { idAdmin } });

		if(!adminExists) {
			return res.sendStatus(404);
		}

		await repository.delete([idAdmin]);
		return res.sendStatus(200);
	}

	async list(req: Request, res: Response) {
		const repository = getRepository(Admin);
		let admins = await repository.find();

		if(!admins){
			return res.sendStatus(404);
		}

		admins = admins.map(admin => {
			delete admin.password;
			return admin;
		});

		return res.json(admins);
	}
}

export default new AdminController;