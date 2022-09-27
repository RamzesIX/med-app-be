import { IPaginationResponse } from '../core/pagination/pagination.types'
import { CreateEntityResponse } from '../core/core.types'
import { ISymptom, SymptomPayload } from './symptoms.types'

export interface ISymptomsService {
    create(payload: SymptomPayload): Promise<CreateEntityResponse>
    findAll(): Promise<IPaginationResponse<ISymptom>>
    findOne(id: string): Promise<ISymptom>
    update(id: string, payload: SymptomPayload): Promise<void>
    remove(id: string): Promise<void>
    prepareSymptomsForSaving(symptoms: Array<SymptomPayload>): Promise<Array<ISymptom | SymptomPayload>>
}
