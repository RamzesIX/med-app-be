import { DataSource } from 'typeorm'
import { Logger } from '@nestjs/common'
import { User } from '../users/entities/user.entity'
import * as bcrypt from 'bcrypt'

export async function initializeUsers(dataSource: DataSource): Promise<void> {
    Logger.debug('initializeUsers: start')

    const userRepository = dataSource.getRepository<User>(User)
    const usersLength = await userRepository.count()

    if (usersLength) {
        Logger.debug('initializeUsers: users already initialized')
        Logger.debug('initializeUsers: done')
        return
    }

    const admin = userRepository.create({
        email: `admin@test.com`,
        name: `John Doe`,
        password: bcrypt.hashSync(`admin`, bcrypt.genSaltSync()),
    })

    await userRepository.save(admin)

    Logger.debug('initializeUsers: done')
}
