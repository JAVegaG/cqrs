export class UserCreatedEvent {
	constructor(
		public readonly id: number,
		public readonly name: string
	) {}
}
