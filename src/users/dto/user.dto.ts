export class UserDto {
    public id: string
    public name: string
    public email: string

    constructor(id: string, name: string, email: string) {
        this.id = id
        this.email = email
        this.name = name
    }
}
