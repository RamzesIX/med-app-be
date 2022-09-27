export class CreateSymptomDto {
    public name: string
    public description: string

    constructor(name: string, description: string) {
        this.name = name
        this.description = description
    }
}

export class CreateSymptomResponseDto {
    public id: string

    constructor(id: string) {
        this.id = id
    }
}
