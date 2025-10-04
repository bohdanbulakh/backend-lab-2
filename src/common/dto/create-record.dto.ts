import {
  IsISO4217CurrencyCode,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
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
  @IsISO4217CurrencyCode()
  currencyName?: string;
}
