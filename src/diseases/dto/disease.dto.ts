import { IDisease } from '../diseases.types'

export class DiseaseDto implements IDisease {
    public id: string
    public name: string
    public description: string

    constructor(id: string, name: string, description: string) {
        this.id = id
        this.name = name
        this.description = description
    }
}
