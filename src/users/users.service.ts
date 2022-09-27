import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { IUser, IUserCredentials } from './users.types'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    public async findUser(id: string): Promise<IUser> {
        return this.usersRepository.findOneOrFail({
            where: { id },
            select: {
                name: true,
                email: true,
                id: true,
            },
        })
    }

    public async findUserCredentials(email: string): Promise<IUserCredentials> {
        return this.usersRepository.findOneOrFail({
            where: { email },
            select: {
                id: true,
                email: true,
                password: true,
            },
        })
    }

    public async saveUser(email: string, name: string, password: string): Promise<void> {
        await this.usersRepository.save({ email, password, name })
    }
}
