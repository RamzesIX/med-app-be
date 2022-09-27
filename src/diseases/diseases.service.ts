import { Injectable } from '@nestjs/common'
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

@Injectable()
export class DiseasesService implements IDiseasesService {
    constructor(
        @InjectRepository(Disease)
        private readonly diseasesRepository: Repository<Disease>,
        private readonly risksService: RisksService,
        private readonly symptomsService: SymptomsService,
    ) {}

    public async create({ name, description, risks, symptoms }: DiseasePayload): Promise<CreateEntityResponse> {
        console.debug('DiseasesService.create', name, description)

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

        console.debug(`DiseasesService.create entity ${id} has been created.`)
        return { id }
    }

    public async findAll(offset?: number, limit?: number): Promise<IPaginationResponse<IDisease>> {
        console.debug(`DiseasesService.findAll, offset:${offset}, limit:${limit}`)
        const [data, total] = await this.diseasesRepository.findAndCount({
            skip: offset,
            take: limit,
            order: { createdDate: 'DESC' },
        })

        console.debug(`DiseasesService.findAll`, data, total)

        return buildPaginationResponse(data, total, offset, limit)
    }

    public async findOne(id: string): Promise<IDiseaseDetails> {
        console.debug(`DiseasesService.findOne id: ${id}`)
        const disease = await this.diseasesRepository.findOneOrFail({
            where: { id },
            relations: {
                risks: true,
                symptoms: true,
            },
        })
        console.debug(`DiseasesService.findOne data: ${disease}`)
        return disease
    }

    public async update(id: string, { description, name, risks, symptoms }: DiseasePayload): Promise<void> {
        console.debug(`DiseasesService.update Id: ${id}, Description: ${description}, Name: ${name}`)
        // Checking that Disease with provided ID exists
        await this.diseasesRepository.findOneByOrFail({ id })
        const [risksForSaving, symptomsForSaving] = await Promise.all([
            this.risksService.prepareRisksForSaving(risks),
            this.symptomsService.prepareSymptomsForSaving(symptoms),
        ])
        await this.diseasesRepository.save({ id, risks: risksForSaving, symptoms: symptomsForSaving, name, description })
        console.debug(`DiseasesService.update Disease ${id} has been updated.`)
    }

    public async remove(id: string): Promise<void> {
        console.debug(`DiseasesService.remove Id: ${id}`)
        await this.diseasesRepository.delete(id)
        console.debug(`DiseasesService.remove Disease: ${id} has been removed.`)
    }
}
