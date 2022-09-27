import { CreateRiskDto } from '../../risks/dto/create-risk.dto'
import { CreateSymptomDto } from '../../symptoms/dto/create-symptom.dto'

export class CreateDiseaseDto {
    public name: string
    public description: string
    public risks: CreateRiskDto[]
    public symptoms: CreateSymptomDto[]

    constructor(name: string, description: string, risks: CreateRiskDto[], symptoms: CreateSymptomDto[]) {
        this.name = name
        this.description = description
        this.risks = risks
        this.symptoms = symptoms
    }
}
