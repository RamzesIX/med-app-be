import { Injectable } from '@nestjs/common'
import { ITokenPayload } from '../auth.types'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { ConfigKey, IAuthConfiguration } from '../../configs/configuration.types'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<IAuthConfiguration>(ConfigKey.Auth)?.accessTokenSecret,
        })
    }

    public async validate(payload: ITokenPayload): Promise<ITokenPayload> {
        return payload
    }
}
