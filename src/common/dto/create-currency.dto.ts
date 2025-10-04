import { IsISO4217CurrencyCode, IsNotEmpty } from 'class-validator';

export class CreateCurrencyDto {
  @IsNotEmpty()
  @IsISO4217CurrencyCode()
  name: string;
}
