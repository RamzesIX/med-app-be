export class EntityNotFoundError extends Error {
    constructor(entityName: string) {
        super(`${entityName} is not found.`)
    }
}
