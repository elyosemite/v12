import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
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
		length: 100
	})
	description: string


	@Column({
		type: "date"
	})
	date: string
}

export default Admin;