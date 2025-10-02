import { NotFoundException } from '@nestjs/common';

export class InvalidEntityIdException extends NotFoundException {
  constructor(table: string) {
    super(`Record with such id is not found in ${table} table`);
  }
}
