import { IEntity } from '../core/core.types'

export interface IRisk extends IEntity {
    name: string
    description: string
}

export type RiskPayload = Pick<IRisk, 'name' | 'description'>
