import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from '../users/users.module'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './strategies/jwt.strategies'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ConfigKey, IAuthConfiguration } from '../configs/configuration.types'

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => {
                const authConfig = configService.get<IAuthConfiguration>(ConfigKey.Auth)
                return {
                    secret: authConfig?.accessTokenSecret,
                    signOptions: { expiresIn: authConfig?.accessTokenExpirationTime },
                }
            },
            inject: [ConfigService],
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
