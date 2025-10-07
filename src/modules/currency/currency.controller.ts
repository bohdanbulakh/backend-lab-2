import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyEntity } from '../../dao/dao/currency.dao';
import { CurrencyByIdValidationPipe } from '../../common/pipes/pipes/currency-by-id-validation.pipe';
import { CreateCurrencyDto } from '../../common/dto/create-currency.dto';
import { AccessGuard } from '../../common/guards/access.guard';

@Controller('/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @UseGuards(AccessGuard)
  @Get()
  getAll(): Promise<CurrencyEntity[]> {
    return this.currencyService.getAll();
  }

  @UseGuards(AccessGuard)
  @Get('/:currencyId')
  getById(
    @Param('currencyId', CurrencyByIdValidationPipe) id: string,
  ): Promise<CurrencyEntity> {
    return this.currencyService.getById(id);
  }

  @UseGuards(AccessGuard)
  @Post()
  create(@Body() data: CreateCurrencyDto): Promise<CurrencyEntity> {
    return this.currencyService.create(data);
  }

  @UseGuards(AccessGuard)
  @Delete('/:currencyId')
  deleteById(
    @Param('currencyId', CurrencyByIdValidationPipe) id: string,
  ): Promise<CurrencyEntity> {
    return this.currencyService.deleteById(id);
  }
}
