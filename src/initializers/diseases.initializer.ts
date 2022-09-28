import { DataSource } from 'typeorm'
import { Logger } from '@nestjs/common'
import { Disease } from 'src/diseases/entities/disease.entity'
import { defaultDiseases } from './data/diseases'

export async function initializeDiseases(dataSource: DataSource): Promise<void> {
    Logger.debug('initializeDiseases: start')

    const diseasesRepository = dataSource.getRepository<Disease>(Disease)
    const diseasesLength = await diseasesRepository.count()

    if (diseasesLength > 0) {
        Logger.debug('initializeDiseases: diseases already initialized')
        Logger.debug('initializeDiseases: done')
        return
    }

    for (const disease of defaultDiseases) {
        await diseasesRepository.save(disease)
    }

    Logger.debug('initializeDiseases: done')
}
