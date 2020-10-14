import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';

import bcrypt from 'bcryptjs';

@Entity('admins')
class Admin {

	@PrimaryGeneratedColumn('uuid')
	idAdmin: number;

	@Column({
		type: "varchar",
		length: 40
	})
	name: string

	@Column({
		type: "varchar",
		length: 100,
		nullable: true
	})
	description: string

	@Column({
		type: "varchar",
		length: 30
	})
	email: string;

	@Column({
		type: "varchar",
		length: 255
	})
	password: string

	@Column({
		type: "date",
		nullable: false
	})
	currentDate: string

	@BeforeInsert()
	@BeforeUpdate()
	async hashGenerator() {
		this.password = bcrypt.hashSync(this.password, 8);
	}
}

export default Admin;