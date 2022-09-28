import { DataSource } from 'typeorm'
import { Logger } from '@nestjs/common'
import { initializeUsers } from './users.initializer'
import { initializeDiseases } from './diseases.initializer'

export async function initializeDb(dataSource: DataSource): Promise<void> {
    try {
        await initializeUsers(dataSource)
        await initializeDiseases(dataSource)
    } catch (e) {
        Logger.error('Failed to initialize DB.')
        Logger.error(e)
    }
}
