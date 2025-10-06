import {
  IsISO4217CurrencyCode,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { LoginDto } from './login.dto';

export class RegisterUserDto extends LoginDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsISO4217CurrencyCode()
  defaultCurrencyName: string;
}
