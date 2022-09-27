import { IPaginationResponse } from './pagination.types'

export function buildPaginationResponse<TData>(data: TData[], total: number, offset = 0, limit = 0): IPaginationResponse<TData> {
    return {
        data,
        meta: { total, limit, offset: offset + limit },
    }
}
