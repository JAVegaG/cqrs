import { Logger, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		SequelizeModule.forRoot({
			dialect: 'sqlite',
			storage: ':memory:',
			autoLoadModels: true,
			synchronize: true,
			logging:
				process.env.DEBUG === 'true'
					? (sql) => {
							Logger.debug(sql, 'DataBase')
					  }
					: undefined
		}),
		UserModule
	]
})
export class AppModule {}
