import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateRecordDto {
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;

  @IsNotEmpty()
  @IsNumber()
  sum: number;
}
