import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Admin from '../models/Admin';

class AuthController {
	async authenticate(req:Request, res: Response) {
		const repository = getRepository(Admin);
		const { idAdmin, password } = req.body;
		const secretKeyENV = 'admins_secret_key'; // This key must come from your ENV variable.

		const admin = await repository.findOne({ where: { idAdmin } });

		if(!admin) {
			return res.sendStatus(404); // Not found
		}

		const isValidpassword = await bcrypt.compare(password, admin.password);

		if(!isValidpassword) {
			return res.sendStatus(401) // Unauthorized
		}

		const token = jwt.sign(
			{ id: admin.idAdmin }, 
			secretKeyENV, 
			{ expiresIn: '2d' }
		);

		delete admin.password;

		return res.json({
			admin,
			token
		});

	}
}

export default new AuthController;