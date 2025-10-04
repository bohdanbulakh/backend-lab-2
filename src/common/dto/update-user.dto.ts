import {
  IsISO4217CurrencyCode,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsISO4217CurrencyCode()
  defaultCurrencyName?: string;
}
