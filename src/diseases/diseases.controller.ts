import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common'
import { DiseasesService } from './diseases.service'
import { CreateDiseaseDto } from './dto/create-disease.dto'
import { UpdateDiseaseDto } from './dto/update-disease.dto'
import { CreateEntityResponseDto } from '../core/dto/create-entity-response.dto'
import { PaginationRequestDto } from '../core/pagination/dto/pagination-request.dto'
import { PaginationResponseDto } from '../core/pagination/dto/pagination-response-dto'
import { DiseaseDto } from './dto/disease.dto'
import { DiseaseDetailsDto } from './dto/disease-details.dto'

@Controller('diseases')
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
    public findOne(@Param('id') id: string): Promise<DiseaseDetailsDto> {
        return this.diseasesService.findOne(id)
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
