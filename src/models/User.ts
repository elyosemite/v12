import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";

import bcrypt from 'bcryptjs';

@Entity('users')
class User {

	@PrimaryGeneratedColumn('uuid')
	id: number;

	@Column()
	email: string;

	@Column()
	password: string;

	@BeforeInsert()
	@BeforeUpdate()
	async hashGenerator() {
		this.password = bcrypt.hashSync(this.password, 8);
	}
}

export default User;
