import { Injectable, Logger } from '@nestjs/common'
import { IRisksService } from './risks.service.types'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { Risk } from './entities/risk.entity'
import { CreateEntityResponse } from '../core/core.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { buildPaginationResponse } from '../core/pagination/pagination.utils'
import { IRisk, RiskPayload } from './risks.types'
import { NotUniqueEntityException } from '../core/errors'

@Injectable()
export class RisksService implements IRisksService {
    constructor(
        @InjectRepository(Risk)
        private risksRepository: Repository<Risk>,
    ) {}

    public async create({ name, description }: RiskPayload): Promise<CreateEntityResponse> {
        Logger.debug('RisksService:create', name, description)

        const risk = await this.risksRepository.findOneBy({ name })

        if (risk) {
            throw new NotUniqueEntityException('Risk', name)
        }

        const { id } = await this.risksRepository.save({
            name,
            description,
        })

        Logger.debug(`RisksService:create entity ${id} has been created.`)
        return { id }
    }

    public async findAll(offset: number, limit: number): Promise<IPaginationResponse<IRisk>> {
        Logger.debug(`RisksService:findAll, offset:${offset}, limit:${limit}`)
        const [data, total] = await this.risksRepository.findAndCount({
            skip: offset,
            take: limit,
            order: { createdDate: 'DESC' },
            select: {
                id: true,
                name: true,
                description: true,
            },
        })

        Logger.debug(`RisksService:findAll done`)

        return buildPaginationResponse(data, total, offset, limit)
    }

    public async findOne(id: string): Promise<IRisk> {
        Logger.debug(`RisksService:findOne id: ${id}`)
        const risk = await this.risksRepository.findOneByOrFail({ id })
        Logger.debug(`RisksService:findOne data: ${risk}`)
        return risk
    }

    public async update(id: string, { description, name }: RiskPayload): Promise<void> {
        Logger.debug(`RisksService:update Id: ${id}, Description: ${description}, Name: ${name}`)
        await this.risksRepository.update(id, { description, name })
        Logger.debug(`RisksService:update Risk ${id} has been updated.`)
    }

    public async remove(id: string): Promise<void> {
        Logger.debug(`RisksService:remove Id: ${id}`)
        await this.risksRepository.delete(id)
        Logger.debug(`RisksService:remove Risk: ${id} has been removed.`)
    }

    /**
     * Processes input array in order to obtain IDs for entities that are already exist in DB
     * @param risks
     */
    public async prepareRisksForSaving(risks: RiskPayload[]): Promise<Array<RiskPayload | IRisk>> {
        // We should get IDs of all existing risks
        const risksToUpdate = await this.risksRepository.findBy({ name: In(risks.map(({ name }) => name)) })
        const risksToUpdateSet = new Set(risksToUpdate.map(({ name }) => name))
        // Now we should filter only risks that should be created
        const risksToInsert = risks.filter(({ name }) => !risksToUpdateSet.has(name))
        // As the result, we included IDs for risks that already exist
        return [...risksToUpdate, ...risksToInsert]
    }
}
