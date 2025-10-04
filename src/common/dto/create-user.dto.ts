import { IsCurrency, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @IsCurrency()
  @MaxLength(3)
  defaultCurrencyName: string;
}
