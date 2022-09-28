import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { IEntity } from '../../core/core.types'
import { IRisk } from '../risks.types'

@Entity('Risks')
export class Risk implements IEntity, IRisk {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column('varchar', { length: 1000 })
    description: string

    @CreateDateColumn()
    createdDate: Date
}
