import { BadRequestException } from '@nestjs/common';

export class EmptyQueryException extends BadRequestException {
  constructor() {
    super('At least one query parameter must be provided');
  }
}
