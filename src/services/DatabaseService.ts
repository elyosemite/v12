import { getConnection } from 'typeorm';
import { getRepository } from 'typeorm';
import User from '../models/User';

interface Instance {
	identifier: number;
	username: string;
}

class DatabaseService {
	saveOneInstance({identifier, username}: Instance) {
		console.log(` Hey, we just save ${username} in our database with identifier=${identifier}`);
	}

	async index() {
		return await getConnection().getRepository(User).find();
	}
}

export default DatabaseService;
