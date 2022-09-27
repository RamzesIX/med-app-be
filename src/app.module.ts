import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SymptomsModule } from './symptoms/symptoms.module'
import { RisksModule } from './risks/risks.module'
import { DiseasesModule } from './diseases/diseases.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { configLoader } from './configs/configuration'
import { ConfigKey, IDatabaseConfiguration } from './configs/configuration.types'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configLoader],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => {
                const databaseConfig = configService.get<IDatabaseConfiguration>(ConfigKey.Database)
                return {
                    type: 'mysql',
                    host: databaseConfig?.host,
                    port: databaseConfig?.port,
                    username: databaseConfig?.user,
                    password: databaseConfig?.password,
                    database: databaseConfig?.database,
                    autoLoadEntities: true,
                    synchronize: true,
                }
            },
            inject: [ConfigService],
        }),
        SymptomsModule,
        RisksModule,
        DiseasesModule,
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
