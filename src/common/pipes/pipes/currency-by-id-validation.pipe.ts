import { EntityByIdValidationPipe } from '../entity-by-id-validation.pipe';
import { Injectable } from '@nestjs/common';
import { CurrencyDao } from '../../../dao/dao/currency.dao';

@Injectable()
export class CurrencyByIdValidationPipe extends EntityByIdValidationPipe {
  constructor(currencyDao: CurrencyDao) {
    super(currencyDao);
  }
}
