export class SignInResponseDto {
    public accessToken: string
    public refreshToken: string
    public userId: string

    constructor(accessToken: string, refreshToken: string, userId: string) {
        this.accessToken = accessToken
        this.refreshToken = refreshToken
        this.userId = userId
    }
}
