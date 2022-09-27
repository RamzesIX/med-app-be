import { Injectable } from '@nestjs/common'
import { CreateSymptomDto } from './dto/create-symptom.dto'
import { UpdateSymptomDto } from './dto/update-symptom.dto'
import { Symptom } from './entities/symptom.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ISymptomsService } from './symptoms.service.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { buildPaginationResponse } from '../core/pagination/pagination.utils'
import { EntityNotFoundError } from '../core/errors'

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

    public async findAll(offset?: number, limit?: number): Promise<IPaginationResponse<Symptom>> {
        console.debug(`SymptomsService.findAll, offset:${offset}, limit:${limit}`)
        const [data, total] = await this.symptomRepository.findAndCount({
            skip: offset,
            take: limit,
            order: { createdDate: 'DESC' },
        })

        console.debug(`SymptomsService.findAll`, data, total)

        return buildPaginationResponse(data, total, offset, limit)
    }

    public async findOne(id: string): Promise<Symptom> {
        console.debug(`SymptomsService.findOne id: ${id}`)
        const symptom = await this.symptomRepository.findOneBy({ id })
        if (!symptom) {
            throw new EntityNotFoundError('Symptom')
        }
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
}
