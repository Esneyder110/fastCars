import { IsString, IsNotEmpty, IsNumber, IsUrl, Min } from 'class-validator';

import { CarInterface } from '../car.interface';

export class CreateCarDto implements CarInterface {
  @IsString()
  @IsNotEmpty()
  readonly model: string;

  @IsString()
  @IsNotEmpty()
  readonly make: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;

  @IsString()
  @IsNotEmpty()
  readonly color: string;

  @IsString()
  @IsNotEmpty()
  readonly transmission: string;
}
