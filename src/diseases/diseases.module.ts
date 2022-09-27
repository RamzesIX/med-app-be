import { Module } from '@nestjs/common'
import { DiseasesService } from './diseases.service'
import { DiseasesController } from './diseases.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Disease } from './entities/disease.entity'
import { RisksModule } from '../risks/risks.module'
import { SymptomsModule } from '../symptoms/symptoms.module'

@Module({
    imports: [TypeOrmModule.forFeature([Disease]), RisksModule, SymptomsModule],
    controllers: [DiseasesController],
    providers: [DiseasesService],
})
export class DiseasesModule {}
