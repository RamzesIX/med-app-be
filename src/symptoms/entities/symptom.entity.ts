import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ISymptom } from '../symptoms.types'

@Entity({ name: 'Symptoms' })
export class Symptom implements ISymptom {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    createdDate: Date
}
