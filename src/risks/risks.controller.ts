import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common'
import { RisksService } from './risks.service'
import { CreateRiskDto } from './dto/create-risk.dto'
import { UpdateRiskDto } from './dto/update-risk.dto'
import { PaginationRequestDto } from '../core/pagination/dto/pagination-request.dto'
import { PaginationResponseDto } from '../core/pagination/dto/pagination-response-dto'
import { CreateEntityResponseDto } from '../core/dto/create-entity-response.dto'
import { RiskDto } from './dto/risk.dto'

@Controller('risks')
export class RisksController {
    constructor(private readonly risksService: RisksService) {}

    @Post()
    public async create(@Body() createRiskDto: CreateRiskDto): Promise<CreateEntityResponseDto> {
        return this.risksService.create(createRiskDto)
    }

    @Get()
    public findAll(@Query() { offset, limit }: PaginationRequestDto): Promise<PaginationResponseDto<RiskDto>> {
        return this.risksService.findAll(Number(offset), Number(limit))
    }

    @Get(':id')
    public findOne(@Param('id') id: string): Promise<RiskDto> {
        return this.risksService.findOne(id)
    }

    @Put(':id')
    public update(@Param('id') id: string, @Body() updateRiskDto: UpdateRiskDto): Promise<void> {
        return this.risksService.update(id, updateRiskDto)
    }

    @Delete(':id')
    public remove(@Param('id') id: string): Promise<void> {
        return this.risksService.remove(id)
    }
}
