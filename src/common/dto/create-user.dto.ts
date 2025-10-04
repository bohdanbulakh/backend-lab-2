import {
  IsISO4217CurrencyCode,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsISO4217CurrencyCode()
  defaultCurrencyName: string;
}
