import { IDiseaseDetails } from '../diseases.types'
import { Risk } from '../../risks/entities/risk.entity'
import { Symptom } from '../../symptoms/entities/symptom.entity'
import { DiseaseDto } from './disease.dto'

export class DiseaseDetailsDto extends DiseaseDto implements IDiseaseDetails {
    public risks: Risk[]
    public symptoms: Symptom[]

    constructor(id: string, name: string, description: string, risks: Risk[], symptoms: Symptom[]) {
        super(id, name, description)
        this.risks = risks
        this.symptoms = symptoms
    }
}
