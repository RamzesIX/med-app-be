import { Controller, Get, Param } from '@nestjs/common'
import { UserDto } from './dto/user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    public getUser(@Param('id') id: string): Promise<UserDto> {
        return this.usersService.findUser(id)
    }
}
