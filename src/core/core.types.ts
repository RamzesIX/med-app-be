export interface IEntity {
    id: string
}

export type CreateEntityResponse = Pick<IEntity, 'id'>
