import { Injectable } from '@nestjs/common'
import { CreateSymptomDto } from './dto/create-symptom.dto'
import { UpdateSymptomDto } from './dto/update-symptom.dto'
import { Symptom } from './entities/symptom.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { ISymptomsService } from './symptoms.service.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { buildPaginationResponse } from '../core/pagination/pagination.utils'
import { ISymptom, SymptomPayload } from './symptoms.types'

@Injectable()
export class SymptomsService implements ISymptomsService {
    constructor(
        @InjectRepository(Symptom)
        private symptomRepository: Repository<Symptom>,
    ) {}

    public async create({ name, description }: CreateSymptomDto): Promise<Pick<Symptom, 'id'>> {
        console.debug('SymptomsService.create', name, description)
        const { id } = await this.symptomRepository.save({
            name,
            description,
        })
        console.debug(`SymptomsService.create Symptom ${id} has been created.`)
        return { id }
    }

    public async findAll(offset?: number, limit?: number): Promise<IPaginationResponse<ISymptom>> {
        console.debug(`SymptomsService.findAll, offset:${offset}, limit:${limit}`)
        const [data, total] = await this.symptomRepository.findAndCount({
            skip: offset,
            take: limit,
            order: { createdDate: 'DESC' },
            select: {
                id: true,
                name: true,
                description: true,
            },
        })

        console.debug(`SymptomsService.findAll`, data, total)

        return buildPaginationResponse(data, total, offset, limit)
    }

    public async findOne(id: string): Promise<ISymptom> {
        console.debug(`SymptomsService.findOne id: ${id}`)
        const symptom = await this.symptomRepository.findOneByOrFail({ id })
        console.debug(`SymptomsService.findOne data: ${symptom}`)
        return symptom
    }

    public async update(id: string, { description, name }: UpdateSymptomDto): Promise<void> {
        console.debug(`SymptomsService.update Id: ${id}, Description: ${description}, Name: ${name}`)
        await this.symptomRepository.update(id, { description, name })
        console.debug(`SymptomsService.update Symptom ${id} has been updated.`)
    }

    public async remove(id: string): Promise<void> {
        console.debug(`SymptomsService.remove Id: ${id}`)
        await this.symptomRepository.delete(id)
        console.debug(`SymptomsService.remove Symptom: ${id} has been removed.`)
    }

    /**
     * Processes input array in order to obtain IDs for entities that are already exist in DB
     * @param symptoms
     */
    public async prepareSymptomsForSaving(symptoms: SymptomPayload[]): Promise<Array<ISymptom | SymptomPayload>> {
        // We should get IDs of all existing entities
        const symptomsToUpdate = await this.symptomRepository.findBy({ name: In(symptoms.map(({ name }) => name)) })
        const symptomsToUpdateSet = new Set(symptomsToUpdate.map(({ name }) => name))
        // Now we should filter only entities that should be created
        const symptomsToInsert = symptoms.filter(({ name }) => !symptomsToUpdateSet.has(name))
        // As the result, we included IDs for entities that already exist
        return [...symptomsToUpdate, ...symptomsToInsert]
    }
}
