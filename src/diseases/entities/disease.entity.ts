import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Risk } from '../../risks/entities/risk.entity'
import { Symptom } from '../../symptoms/entities/symptom.entity'

@Entity('Diseases')
export class Disease {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column()
    description: string

    @CreateDateColumn()
    createdDate: Date

    @ManyToMany(() => Risk, { cascade: true })
    @JoinTable()
    risks: Risk[]

    @ManyToMany(() => Symptom, { cascade: true })
    @JoinTable()
    symptoms: Symptom[]
}
