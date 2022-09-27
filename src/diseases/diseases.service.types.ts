import { CreateEntityResponse } from '../core/core.types'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { DiseasePayload, IDisease, IDiseaseDetails } from './diseases.types'
import { IRisk } from '../risks/risks.types'
import { ISymptom } from '../symptoms/symptoms.types'

export interface IDiseasesService {
    create(payload: DiseasePayload): Promise<CreateEntityResponse>
    findAll(offset: number, limit: number): Promise<IPaginationResponse<IDisease>>
    findOne(id: string): Promise<IDiseaseDetails>
    findRisks(id: string): Promise<IRisk[]>
    findSymptoms(id: string): Promise<ISymptom[]>
    update(id: string, payload: DiseasePayload): Promise<void>
    remove(id: string): Promise<void>
}
