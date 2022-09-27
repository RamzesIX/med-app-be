export class PaginationRequestDto {
    public offset?: string
    public limit?: string

    constructor(offset?: string, limit?: string) {
        this.limit = limit
        this.offset = offset
    }
}
