import { Injectable } from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { CreateUserCommand } from '../commands/create-user.command'
import { GetUserQuery } from '../queries/get-user.query'

@Injectable()
export class UserService {
	constructor(
		private commandBus: CommandBus,
		private queryBus: QueryBus
	) {}

	createUser(name: string, email: string) {
		return this.commandBus.execute(new CreateUserCommand(name, email))
	}

	getUserById(id: number) {
		return this.queryBus.execute(new GetUserQuery(id))
	}
}
