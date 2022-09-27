import { PaginationResponseDto } from '../../core/pagination/dto/pagination-response-dto'
import { Symptom } from '../entities/symptom.entity'

export class GetSymptomsDto extends PaginationResponseDto<Symptom> {}
