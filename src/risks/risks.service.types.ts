import { CreateRiskDto } from './dto/create-risk.dto'
import { UpdateRiskDto } from './dto/update-risk.dto'
import { CreateEntityResponse } from '../core/core.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { Risk } from './entities/risk.entity'

export interface IRisksService {
    create(createRiskDto: CreateRiskDto): Promise<CreateEntityResponse>
    findAll(): Promise<IPaginationResponse<Risk>>
    findOne(id: string): Promise<Risk>
    update(id: string, updateRiskDto: UpdateRiskDto): Promise<void>
    remove(id: string): Promise<void>
}
