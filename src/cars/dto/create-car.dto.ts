import { IsString, IsNotEmpty, IsNumber, IsUrl, Min } from 'class-validator';

export class CreateCarDto {
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
