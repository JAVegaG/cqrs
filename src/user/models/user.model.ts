import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table
export class User extends Model {
	@Column({ primaryKey: true, autoIncrement: true })
	id!: number

	@Column({ type: DataType.STRING, allowNull: false })
	name!: string

	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	email!: string
}
