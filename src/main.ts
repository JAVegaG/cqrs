import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import dotenv from 'dotenv'
import { AppModule } from './app.module'

dotenv.config()

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Enable global validation
	app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))

	// Swagger setup
	const config = new DocumentBuilder()
		.setTitle('User API')
		.setDescription('API for managing users')
		.setVersion('1.0')
		.addTag('users')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	const APP_PORT = process.env.PORT ?? 7031

	await app.listen(APP_PORT, () => {
		console.log(
			`🚀 Application is running on: http://localhost:${APP_PORT}`
		)
	})
}
bootstrap()
