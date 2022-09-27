import { PaginationMetaDto } from './pagination-meta.dto'

export class PaginationResponseDto<TData> {
    public data: TData[]
    public meta: PaginationMetaDto

    constructor(data: TData[], meta: PaginationMetaDto) {
        this.data = data
        this.meta = meta
    }
}
