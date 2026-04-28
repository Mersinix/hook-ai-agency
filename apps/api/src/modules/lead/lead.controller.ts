import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { LeadsService } from './lead.service';
import { CreateLeadDto } from './dto/create-lead.dto';
import { QueryLeadDto } from './dto/query-lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@Body() body: CreateLeadDto) {
    return this.leadsService.create(body);
  }

  @Get()
  findAll(@Query() query: QueryLeadDto) {
    return this.leadsService.findAll(query);
  }
}