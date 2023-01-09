import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { CarInterface } from '../car.interface';
export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car implements CarInterface {
  @Prop()
  model: string;
  @Prop()
  make: string;
  @Prop()
  price: number;
  @Prop()
  image: string;
  @Prop()
  color: string;
  @Prop()
  transmission: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
