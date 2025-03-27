import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { CreateUserDto } from './dtos/create-user.dto'
import { UserResponseDto } from './dtos/user-response.dto'
import { UserService } from './services/user.service'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@ApiOperation({ summary: 'Create a new user' })
	@ApiResponse({
		status: 201,
		description: 'User successfully created',
		type: UserResponseDto
	})
	@ApiResponse({ status: 400, description: 'Invalid input' })
	async createUser(
		@Body() createUserDto: CreateUserDto
	): Promise<UserResponseDto> {
		const user = await this.userService.createUser(
			createUserDto.name,
			createUserDto.email
		)
		return { id: user.id, name: user.name, email: user.email }
	}

	@Get(':id')
	@ApiOperation({ summary: 'Retrieve user by ID' })
	@ApiResponse({
		status: 200,
		description: 'User found',
		type: UserResponseDto
	})
	@ApiResponse({ status: 404, description: 'User not found' })
	async getUser(@Param('id') id: number): Promise<UserResponseDto> {
		const user = await this.userService.getUserById(id)
		return { id: user.id, name: user.name, email: user.email }
	}
}
