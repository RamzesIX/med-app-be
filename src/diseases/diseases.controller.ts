import { Controller, Get, Post, Body, Param, Delete, Query, Put, UseGuards } from '@nestjs/common'
import { DiseasesService } from './diseases.service'
import { CreateDiseaseDto } from './dto/create-disease.dto'
import { UpdateDiseaseDto } from './dto/update-disease.dto'
import { CreateEntityResponseDto } from '../core/dto/create-entity-response.dto'
import { PaginationRequestDto } from '../core/pagination/dto/pagination-request.dto'
import { PaginationResponseDto } from '../core/pagination/dto/pagination-response-dto'
import { DiseaseDto } from './dto/disease.dto'
import { DiseaseDetailsDto } from './dto/disease-details.dto'
import { RiskDto } from '../risks/dto/risk.dto'
import { SymptomDto } from '../symptoms/dto/symptom.dto'
import { AuthJwtGuard } from '../auth/guards/auth-jwt.guard'
import { EntityNotFoundError } from 'typeorm'
import { EntityNotFoundException } from '../core/errors'

@Controller('diseases')
@UseGuards(AuthJwtGuard)
export class DiseasesController {
    constructor(private readonly diseasesService: DiseasesService) {}

    @Post()
    public async create(@Body() createDiseaseDto: CreateDiseaseDto): Promise<CreateEntityResponseDto> {
        return this.diseasesService.create(createDiseaseDto)
    }

    @Get()
    public findAll(@Query() { offset, limit }: PaginationRequestDto): Promise<PaginationResponseDto<DiseaseDto>> {
        return this.diseasesService.findAll(Number(offset), Number(limit))
    }

    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<DiseaseDetailsDto> {
        try {
            return await this.diseasesService.findOne(id)
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                throw new EntityNotFoundException('Disease', id)
            }
            throw error
        }
    }

    @Get(':id/risks')
    public findRisks(@Param('id') id: string): Promise<RiskDto[]> {
        return this.diseasesService.findRisks(id)
    }

    @Get(':id/symptoms')
    public findSymptoms(@Param('id') id: string): Promise<SymptomDto[]> {
        return this.diseasesService.findSymptoms(id)
    }

    @Put(':id')
    public update(@Param('id') id: string, @Body() updateDiseaseDto: UpdateDiseaseDto): Promise<void> {
        return this.diseasesService.update(id, updateDiseaseDto)
    }

    @Delete(':id')
    public remove(@Param('id') id: string): Promise<void> {
        return this.diseasesService.remove(id)
    }
}
