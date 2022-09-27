import { PaginationResponseDto } from '../../core/pagination/dto/pagination-response-dto'
import { SymptomDto } from './symptom.dto'

export class GetSymptomsDto extends PaginationResponseDto<SymptomDto> {}
