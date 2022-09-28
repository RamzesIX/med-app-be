import { Controller, Get, Post, Body, Put, Param, Delete, Query, UseGuards } from '@nestjs/common'
import { SymptomsService } from './symptoms.service'
import { CreateSymptomDto } from './dto/create-symptom.dto'
import { UpdateSymptomDto } from './dto/update-symptom.dto'
import { PaginationRequestDto } from '../core/pagination/dto/pagination-request.dto'
import { PaginationResponseDto } from '../core/pagination/dto/pagination-response-dto'
import { CreateEntityResponseDto } from '../core/dto/create-entity-response.dto'
import { SymptomDto } from './dto/symptom.dto'
import { AuthJwtGuard } from '../auth/guards/auth-jwt.guard'
import { EntityNotFoundError } from 'typeorm'
import { EntityNotFoundException } from '../core/errors'

@Controller('symptoms')
@UseGuards(AuthJwtGuard)
export class SymptomsController {
    constructor(private readonly symptomsService: SymptomsService) {}

    @Post()
    public async create(@Body() createSymptomDto: CreateSymptomDto): Promise<CreateEntityResponseDto> {
        return this.symptomsService.create(createSymptomDto)
    }

    @Get()
    public findAll(@Query() { offset, limit }: PaginationRequestDto): Promise<PaginationResponseDto<SymptomDto>> {
        return this.symptomsService.findAll(Number(offset), Number(limit))
    }

    @Get(':id')
    public async findOne(@Param('id') id: string): Promise<SymptomDto> {
        try {
            return await this.symptomsService.findOne(id)
        } catch (error) {
            if (error instanceof EntityNotFoundError) {
                throw new EntityNotFoundException('Symptom', id)
            }
            throw error
        }
    }

    @Put(':id')
    public update(@Param('id') id: string, @Body() updateSymptomDto: UpdateSymptomDto): Promise<void> {
        return this.symptomsService.update(id, updateSymptomDto)
    }

    @Delete(':id')
    public remove(@Param('id') id: string): Promise<void> {
        return this.symptomsService.remove(id)
    }
}
