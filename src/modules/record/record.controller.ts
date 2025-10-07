import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { GetRecordsQueryDto } from '../../common/dto/get-records-query.dto';
import { RecordResponse } from '../../common/responses/record.response';
import { CreateRecordDto } from '../../common/dto/create-record.dto';
import { RecordByIdValidationPipe } from '../../common/pipes/pipes/record-by-id-validation.pipe';
import { CreateRecordValidationPipe } from '../../common/pipes/pipes/create-record-validation.pipe';
import { AccessGuard } from '../../common/guards/access.guard';

@Controller('/record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @UseGuards(AccessGuard)
  @Get()
  getAll(@Query() query: GetRecordsQueryDto): Promise<RecordResponse[]> {
    return this.recordService.getAll(query);
  }

  @UseGuards(AccessGuard)
  @Get(':recordId')
  getById(
    @Param('recordId', RecordByIdValidationPipe) id: string,
  ): Promise<RecordResponse> {
    return this.recordService.getById(id);
  }

  @UseGuards(AccessGuard)
  @Post()
  create(
    @Body(CreateRecordValidationPipe) data: CreateRecordDto,
  ): Promise<RecordResponse> {
    return this.recordService.create(data);
  }

  @UseGuards(AccessGuard)
  @Delete(':recordId')
  deleteById(
    @Param('recordId', RecordByIdValidationPipe) id: string,
  ): Promise<RecordResponse> {
    return this.recordService.deleteById(id);
  }
}
