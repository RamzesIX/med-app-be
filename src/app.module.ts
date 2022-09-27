import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SymptomsModule } from './symptoms/symptoms.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            autoLoadEntities: true,
            synchronize: true,
        }),
        SymptomsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
