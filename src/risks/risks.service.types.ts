import { CreateEntityResponse } from '../core/core.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { IRisk, RiskPayload } from './risks.types'

export interface IRisksService {
    create(payload: RiskPayload): Promise<CreateEntityResponse>
    findAll(offset: number, limit: number): Promise<IPaginationResponse<IRisk>>
    findOne(id: string): Promise<IRisk>
    update(id: string, payload: RiskPayload): Promise<void>
    remove(id: string): Promise<void>
    prepareRisksForSaving(risks: RiskPayload[]): Promise<Array<IRisk | RiskPayload>>
}
