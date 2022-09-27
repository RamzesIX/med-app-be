import { IEntity } from '../core/core.types'

export interface ISymptom extends IEntity {
    name: string
    description: string
}

export type SymptomPayload = Pick<ISymptom, 'name' | 'description'>
