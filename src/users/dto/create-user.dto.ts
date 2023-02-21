import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';

import { UserInterface } from '../user.interface';

export class CreateUserDto implements UserInterface {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Length(8)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly role: string;
}
