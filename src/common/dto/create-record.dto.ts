import {
  IsCurrency,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  MaxLength,
} from 'class-validator';

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

  @IsNotEmpty()
  @IsCurrency()
  @MaxLength(3)
  currencyName: string;
}
