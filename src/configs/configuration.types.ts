export interface IAuthConfiguration {
    accessTokenSecret: string
    accessTokenExpirationTime: string
    refreshTokenSecret: string
    refreshTokenExpirationTime: string
}

export interface IDatabaseConfiguration {
    host: string
    port: number
    user: string
    password: string
    database: string
}

export enum ConfigKey {
    Database = 'database',
    Auth = 'auth',
}

export interface IConfig {
    [ConfigKey.Auth]: IAuthConfiguration
    [ConfigKey.Database]: IDatabaseConfiguration
}
