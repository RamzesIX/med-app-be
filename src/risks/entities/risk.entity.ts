import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IEntity } from '../../core/core.types'

@Entity('Risks')
export class Risk implements IEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    createdDate: Date
}
