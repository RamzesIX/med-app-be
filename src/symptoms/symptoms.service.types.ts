import { CreateSymptomDto } from './dto/create-symptom.dto'
import { Symptom } from './entities/symptom.entity'
import { UpdateSymptomDto } from './dto/update-symptom.dto'
import { IPaginationResponse } from '../core/pagination/pagination.types'
import { CreateEntityResponse } from '../core/core.types'

export interface ISymptomsService {
    create(createSymptomDto: CreateSymptomDto): Promise<CreateEntityResponse>
    findAll(): Promise<IPaginationResponse<Symptom>>
    findOne(id: string): Promise<Symptom>
    update(id: string, updateSymptomDto: UpdateSymptomDto): Promise<void>
    remove(id: string): Promise<void>
}
