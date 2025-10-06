import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Length,
  MaxLength,
} from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(6, 50)
  username: string;

  @IsNotEmpty()
  @IsStrongPassword({ minNumbers: 8, minSymbols: 2, minLength: 10 })
  @MaxLength(50)
  password: string;
}
