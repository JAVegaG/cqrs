import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs'
import { CreateUserCommand } from '../create-user.command'
import { UserRepository } from '../../repository/user.repository'
import { UserCreatedEvent } from '../../events/user-created.event'

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
	constructor(
		private userRepo: UserRepository,
		private eventBus: EventBus
	) {}

	async execute(command: CreateUserCommand) {
		const user = await this.userRepo.createUser(command.name, command.email)
		this.eventBus.publish(new UserCreatedEvent(user.id, user.name))
		return user
	}
}
