import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignInRequestDto } from './dto/sign-in-request.dto'
import { SignInResponseDto } from './dto/sign-in-response.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    public login(@Body() payload: SignInRequestDto): Promise<SignInResponseDto> {
        return this.authService.signIn(payload.email, payload.password)
    }
}
