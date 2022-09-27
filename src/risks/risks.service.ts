import { Injectable } from '@nestjs/common'
import { CreateRiskDto } from './dto/create-risk.dto'
import { UpdateRiskDto } from './dto/update-risk.dto'
import { IRisksService } from './risks.service.types'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Risk } from './entities/risk.entity'
import { CreateEntityResponse } from '../core/core.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { buildPaginationResponse } from '../core/pagination/pagination.utils'
import { EntityNotFoundError } from '../core/errors'

@Injectable()
export class RisksService implements IRisksService {
    constructor(
        @InjectRepository(Risk)
        private risksRepository: Repository<Risk>,
    ) {}

    public async create({ name, description }: CreateRiskDto): Promise<CreateEntityResponse> {
        console.debug('RisksService.create', name, description)
        const { id } = await this.risksRepository.save({
            name,
            description,
        })

        console.debug(`RisksService.create entity ${id} has been created.`)
        return { id }
    }

    public async findAll(offset?: number, limit?: number): Promise<IPaginationResponse<Risk>> {
        console.debug(`RisksService.findAll, offset:${offset}, limit:${limit}`)
        const [data, total] = await this.risksRepository.findAndCount({
            skip: offset,
            take: limit,
            order: { createdDate: 'DESC' },
        })

        console.debug(`RisksService.findAll`, data, total)

        return buildPaginationResponse(data, total, offset, limit)
    }

    public async findOne(id: string): Promise<Risk> {
        console.debug(`RisksService.findOne id: ${id}`)
        const risk = await this.risksRepository.findOneBy({ id })
        if (!risk) {
            throw new EntityNotFoundError('Risk')
        }
        console.debug(`RisksService.findOne data: ${risk}`)
        return risk
    }

    public async update(id: string, { description, name }: UpdateRiskDto): Promise<void> {
        console.debug(`RisksService.update Id: ${id}, Description: ${description}, Name: ${name}`)
        await this.risksRepository.update(id, { description, name })
        console.debug(`RisksService.update Risk ${id} has been updated.`)
    }

    public async remove(id: string): Promise<void> {
        console.debug(`RisksService.remove Id: ${id}`)
        await this.risksRepository.delete(id)
        console.debug(`RisksService.remove Risk: ${id} has been removed.`)
    }
}
