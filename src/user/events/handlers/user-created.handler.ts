import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import { UserCreatedEvent } from '../user-created.event'

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler
	implements IEventHandler<UserCreatedEvent>
{
	handle(event: UserCreatedEvent) {
		console.log(
			`Event Published: 👤 User created: ${event.id} - ${event.name}`
		)
	}
}
