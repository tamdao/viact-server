import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;
}
