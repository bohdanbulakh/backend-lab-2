import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { GetRecordsQueryDto } from '../../common/dto/get-records-query.dto';
import { RecordResponse } from '../../common/responses/record.response';
import { CreateRecordDto } from '../../common/dto/create-record.dto';

@Controller('/record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get()
  getAll(@Query() query: GetRecordsQueryDto): RecordResponse[] {
    return this.recordService.getAll(query);
  }

  @Get(':recordId')
  getById(@Param('recordId') id: string): RecordResponse {
    return this.recordService.getById(id);
  }

  @Post()
  create(@Body() data: CreateRecordDto): RecordResponse {
    return this.recordService.create(data);
  }

  @Delete(':recordId')
  updateById(@Param('recordId') id: string): RecordResponse {
    return this.recordService.deleteById(id);
  }
}
