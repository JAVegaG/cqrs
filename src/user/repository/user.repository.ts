import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from '../models/user.model'

@Injectable()
export class UserRepository {
	constructor(@InjectModel(User) private userModel: typeof User) {}

	async createUser(name: string, email: string): Promise<User> {
		return this.userModel.create({ name, email })
	}

	async findUserById(id: number): Promise<User | null> {
		return this.userModel.findByPk(id)
	}
}
