import { IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
	@ApiProperty({
		example: 'John Doe',
		description: 'The full name of the user'
	})
	@IsString()
	@IsNotEmpty()
	name!: string

	@ApiProperty({
		example: 'john.doe@example.com',
		description: 'The email of the user'
	})
	@IsEmail()
	@IsNotEmpty()
	email!: string
}
