import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DataSource } from 'typeorm'
import { initializeUsers } from './initializers/users.initializer'

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule, { cors: true })
    app.setGlobalPrefix('api/v1')
    await app.listen(3000)
    const dataSource = app.get<DataSource>(DataSource)

    await initializeUsers(dataSource)
}
void bootstrap()
