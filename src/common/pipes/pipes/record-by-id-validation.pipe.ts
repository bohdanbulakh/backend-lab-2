import { EntityByIdValidationPipe } from '../entity-by-id-validation.pipe';
import { Injectable } from '@nestjs/common';
import { RecordDao } from '../../../dao/dao/record.dao';

@Injectable()
export class RecordByIdValidationPipe extends EntityByIdValidationPipe {
  constructor(recordDao: RecordDao) {
    super(recordDao);
  }
}
