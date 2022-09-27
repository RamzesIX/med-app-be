import { Risk } from '../risks/entities/risk.entity'
import { Symptom } from '../symptoms/entities/symptom.entity'
import { RiskPayload } from '../risks/risks.types'
import { SymptomPayload } from '../symptoms/symptoms.types'

export interface IDisease {
    id: string
    name: string
    description: string
}

export interface IDiseaseDetails extends IDisease {
    risks: Risk[]
    symptoms: Symptom[]
}

export type DiseasePayload = Omit<IDisease, 'id'> & { risks: RiskPayload[]; symptoms: SymptomPayload[] }
