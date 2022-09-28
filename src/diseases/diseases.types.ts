import { IRisk, RiskPayload } from '../risks/risks.types'
import { ISymptom, SymptomPayload } from '../symptoms/symptoms.types'

export interface IDisease {
    id: string
    name: string
    description: string
}

export interface IDiseaseDetails extends IDisease {
    risks: IRisk[]
    symptoms: ISymptom[]
}

export type DiseasePayload = Omit<IDisease, 'id'> & { risks: RiskPayload[]; symptoms: SymptomPayload[] }
