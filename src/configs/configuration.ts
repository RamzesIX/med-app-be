import { ConfigKey, IConfig } from './configuration.types'

export const configuration: IConfig = {
    [ConfigKey.Auth]: {
        accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET ?? 'accessSecret',
        accessTokenExpirationTime: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME ?? '1d',
        refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET ?? 'accessSecret',
        refreshTokenExpirationTime: process.env.JWT_REFRESH_TOKEN_EXPIRATION_TIME ?? '30d',
    },
    [ConfigKey.Database]: {
        host: process.env.DATABASE_HOST ?? 'localhost',
        port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 3306,
        user: process.env.DATABASE_USER ?? 'root',
        password: process.env.DATABASE_PASSWORD ?? 'root',
        database: process.env.DATABASE_NAME ?? 'medapp',
    },
}

export function configLoader(): IConfig {
    return configuration
}
