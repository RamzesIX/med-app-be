import { Controller, Get, Param, UseGuards } from '@nestjs/common'
import { UserDto } from './dto/user.dto'
import { UsersService } from './users.service'
import { AuthJwtGuard } from '../auth/guards/auth-jwt.guard'

@Controller('users')
@UseGuards(AuthJwtGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    public getUser(@Param('id') id: string): Promise<UserDto> {
        return this.usersService.findUser(id)
    }
}
