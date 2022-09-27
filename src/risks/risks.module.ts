import { Module } from '@nestjs/common'
import { RisksService } from './risks.service'
import { RisksController } from './risks.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Risk } from './entities/risk.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Risk])],
    controllers: [RisksController],
    providers: [RisksService],
})
export class RisksModule {}
