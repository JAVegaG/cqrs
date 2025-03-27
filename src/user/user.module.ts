import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { SequelizeModule } from '@nestjs/sequelize'
import { CreateUserHandler } from './commands/handlers/create-user.handler'
import { UserCreatedEventHandler } from './events/handlers/user-created.handler'
import { User } from './models/user.model'
import { UserRepository } from './repository/user.repository'
import { UserService } from './services/user.service'
import { UserController } from './user.controller'
import { GetUserHandler } from './queries/handlers/get-user.handler'

@Module({
	imports: [CqrsModule, SequelizeModule.forFeature([User])],
	controllers: [UserController],
	providers: [
		UserService,
		UserRepository,
		CreateUserHandler,
		GetUserHandler,
		UserCreatedEventHandler
	]
})
export class UserModule {}
