import { QueryHandler, IQueryHandler } from '@nestjs/cqrs'
import { GetUserQuery } from '../get-user.query'
import { UserRepository } from '../../repository/user.repository'

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
	constructor(private userRepo: UserRepository) {}

	async execute(query: GetUserQuery) {
		return this.userRepo.findUserById(query.id)
	}
}
