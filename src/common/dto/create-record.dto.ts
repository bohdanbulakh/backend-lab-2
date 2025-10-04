import {
  IsCurrency,
  IsNotEmpty,
  IsNumber,
  IsOptional,
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

  @IsOptional()
  @IsCurrency()
  @MaxLength(3)
  currencyName?: string;
}
