import { NotFoundException } from '@nestjs/common';

export class InvalidEntityIdException extends NotFoundException {
  constructor(entity: string) {
    super(`${entity} with such id is not found`);
  }
}
