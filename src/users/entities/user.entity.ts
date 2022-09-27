import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IEntity } from '../../core/core.types'

@Entity('Users')
export class User implements IEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string
}
