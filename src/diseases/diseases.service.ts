import { Injectable, Logger } from '@nestjs/common'
import { IDiseasesService } from './diseases.service.types'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateEntityResponse } from '../core/core.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { buildPaginationResponse } from '../core/pagination/pagination.utils'
import { Disease } from './entities/disease.entity'
import { DiseasePayload, IDisease, IDiseaseDetails } from './diseases.types'
import { RisksService } from '../risks/risks.service'
import { SymptomsService } from '../symptoms/symptoms.service'
import { IRisk } from '../risks/risks.types'
import { ISymptom } from '../symptoms/symptoms.types'
import { NotUniqueEntityException } from '../core/errors'

@Injectable()
export class DiseasesService implements IDiseasesService {
    constructor(
        @InjectRepository(Disease)
        private readonly diseasesRepository: Repository<Disease>,
        private readonly risksService: RisksService,
        private readonly symptomsService: SymptomsService,
    ) {}

    public async create({ name, description, risks, symptoms }: DiseasePayload): Promise<CreateEntityResponse> {
        Logger.debug('DiseasesService:create start', name, description)

        const disease = await this.diseasesRepository.findOneBy({ name })

        if (disease) {
            throw new NotUniqueEntityException('Disease', name)
        }

        const [risksForSaving, symptomsForSaving] = await Promise.all([
            this.risksService.prepareRisksForSaving(risks),
            this.symptomsService.prepareSymptomsForSaving(symptoms),
        ])
        const { id } = await this.diseasesRepository.save({
            name,
            description,
            risks: risksForSaving,
            symptoms: symptomsForSaving,
        })

        Logger.debug(`DiseasesService:create entity ${id} has been created.`)
        Logger.debug(`DiseasesService:create done.`)
        return { id }
    }

    public async findAll(offset: number, limit: number): Promise<IPaginationResponse<IDisease>> {
        Logger.debug(`DiseasesService:findAll, offset:${offset}, limit:${limit}`)
        const [data, total] = await this.diseasesRepository.findAndCount({
            skip: offset,
            take: limit,
            order: { createdDate: 'DESC' },
        })

        Logger.debug(`DiseasesService:findAll done`)

        return buildPaginationResponse(data, total, offset, limit)
    }

    public async findRisks(diseaseId: string): Promise<IRisk[]> {
        Logger.debug(`DiseasesService:findRisks Disease Id: ${diseaseId}`)
        const { risks } = await this.diseasesRepository.findOneOrFail({
            where: { id: diseaseId },
            relations: {
                risks: true,
            },
            select: {
                risks: true,
            },
        })
        Logger.debug(`DiseasesService:findRisks done`)
        return risks
    }

    public async findSymptoms(diseaseId: string): Promise<ISymptom[]> {
        Logger.debug(`DiseasesService:findSymptoms Disease Id: ${diseaseId}`)
        const { symptoms } = await this.diseasesRepository.findOneOrFail({
            where: { id: diseaseId },
            relations: {
                symptoms: true,
            },
            select: {
                symptoms: true,
            },
        })
        Logger.debug(`DiseasesService:findSymptoms done`)
        return symptoms
    }

    public async findOne(id: string): Promise<IDiseaseDetails> {
        Logger.debug(`DiseasesService:findOne id: ${id}`)
        const disease = await this.diseasesRepository.findOneOrFail({
            where: { id },
            relations: {
                risks: true,
                symptoms: true,
            },
        })
        Logger.debug(`DiseasesService.findOne result: ${disease}`)
        return disease
    }

    public async update(id: string, { description, name, risks, symptoms }: DiseasePayload): Promise<void> {
        Logger.debug(`DiseasesService:update Id: ${id}, Name: ${name}`)
        // Checking that Disease with provided ID exists
        await this.diseasesRepository.findOneByOrFail({ id })
        const [risksForSaving, symptomsForSaving] = await Promise.all([
            this.risksService.prepareRisksForSaving(risks),
            this.symptomsService.prepareSymptomsForSaving(symptoms),
        ])
        await this.diseasesRepository.save({ id, risks: risksForSaving, symptoms: symptomsForSaving, name, description })
        Logger.debug(`DiseasesService:update Disease ${id} has been updated.`)
    }

    public async remove(id: string): Promise<void> {
        Logger.debug(`DiseasesService:remove Id: ${id}`)
        await this.diseasesRepository.delete(id)
        Logger.debug(`DiseasesService:remove Disease: ${id} has been removed.`)
    }
}
