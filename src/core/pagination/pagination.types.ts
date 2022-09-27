export interface IPaginationMeta {
    offset: number
    limit: number
    total: number
}

export interface IPaginationResponse<TData> {
    data: TData[]
    meta: IPaginationMeta
}
