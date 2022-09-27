import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { ISignInResponse, ITokenPayload } from './auth.types'
import * as bcrypt from 'bcrypt'
import { SignInInvalidCredentialsException } from './auth.errors'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { ConfigKey, IAuthConfiguration } from '../configs/configuration.types'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) {}

    public async createUser(email: string, name: string, password: string): Promise<void> {
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync())

        await this.usersService.saveUser(email, name, hashedPassword)
    }

    public async signIn(email: string, password: string): Promise<ISignInResponse> {
        const { id: userId, password: userPassword } = await this.usersService.findUserCredentials(email)

        if (!bcrypt.compareSync(password, userPassword)) {
            throw new SignInInvalidCredentialsException()
        }
        return {
            userId,
            accessToken: this.issueAccessToken(userId),
            refreshToken: this.issueRefreshToken(userId),
        }
    }

    private issueAccessToken(userId: string): string {
        const payload: ITokenPayload = { id: userId }
        return this.jwtService.sign(payload)
    }

    private issueRefreshToken(userId: string): string {
        const payload: ITokenPayload = { id: userId }
        const authConfig = this.configService.get<IAuthConfiguration>(ConfigKey.Auth)
        return this.jwtService.sign(payload, {
            secret: authConfig?.refreshTokenSecret,
            expiresIn: authConfig?.refreshTokenExpirationTime,
        })
    }
}
