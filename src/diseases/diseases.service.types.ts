import { CreateEntityResponse } from '../core/core.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { DiseasePayload, IDisease, IDiseaseDetails } from './diseases.types'

export interface IDiseasesService {
    create(payload: DiseasePayload): Promise<CreateEntityResponse>
    findAll(): Promise<IPaginationResponse<IDisease>>
    findOne(id: string): Promise<IDiseaseDetails>
    update(id: string, payload: DiseasePayload): Promise<void>
    remove(id: string): Promise<void>
}
