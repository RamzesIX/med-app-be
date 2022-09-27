import { PaginationResponseDto } from '../../core/pagination/dto/pagination-response-dto'
import { Risk } from '../entities/risk.entity'

export class GetRisksDto extends PaginationResponseDto<Risk> {}
