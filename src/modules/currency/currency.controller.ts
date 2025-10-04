import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyEntity } from '../../dao/dao/currency.dao';
import { CurrencyByIdValidationPipe } from '../../common/pipes/pipes/currency-by-id-validation.pipe';
import { CreateCurrencyDto } from '../../common/dto/create-currency.dto';

@Controller('/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  getAll(): Promise<CurrencyEntity[]> {
    return this.currencyService.getAll();
  }

  @Get('/:currencyId')
  getById(
    @Param('currencyId', CurrencyByIdValidationPipe) id: string,
  ): Promise<CurrencyEntity> {
    return this.currencyService.getById(id);
  }

  @Post()
  create(@Body() data: CreateCurrencyDto): Promise<CurrencyEntity> {
    return this.currencyService.create(data);
  }

  @Delete('/:currencyId')
  deleteById(
    @Param('currencyId', CurrencyByIdValidationPipe) id: string,
  ): Promise<CurrencyEntity> {
    return this.currencyService.deleteById(id);
  }
}
