export class PaginationMetaDto {
    public offset: number
    public limit: number
    public total: number

    constructor(offset: number, limit: number, total: number) {
        this.limit = limit
        this.offset = offset
        this.total = total
    }
}
