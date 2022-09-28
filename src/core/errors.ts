import { ConflictException, NotFoundException } from '@nestjs/common'

export class EntityNotFoundException extends NotFoundException {
    constructor(entityName: string, id: string) {
        super(`${entityName} with ID:${id} is not found.`)
    }
}

export class DuplicatedEntityException extends ConflictException {
    constructor(entityName: string, id: string) {
        super(`${entityName} with ID:${id} already exists.`)
    }
}

export class NotUniqueEntityException extends ConflictException {
    constructor(entityName: string, name: string) {
        super(`${entityName} with name:${name} already exists.`)
    }
}
