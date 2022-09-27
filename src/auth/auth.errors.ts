import { BadRequestException } from '@nestjs/common'

export class SignInInvalidCredentialsException extends BadRequestException {
    constructor() {
        super('Invalid credentials.')
    }
}
