import { BadRequestException } from '@nestjs/common'

export class SignInInvalidCredentialsException extends BadRequestException {
    message = 'Invalid credentials.'
}
