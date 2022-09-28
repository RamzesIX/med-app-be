import { IDiseaseDetails } from '../diseases.types'
import { DiseaseDto } from './disease.dto'
import { RiskDto } from '../../risks/dto/risk.dto'
import { SymptomDto } from '../../symptoms/dto/symptom.dto'

export class DiseaseDetailsDto extends DiseaseDto implements IDiseaseDetails {
    public risks: RiskDto[]
    public symptoms: SymptomDto[]

    constructor(id: string, name: string, description: string, risks: RiskDto[], symptoms: SymptomDto[]) {
        super(id, name, description)
        this.risks = risks
        this.symptoms = symptoms
    }
}
