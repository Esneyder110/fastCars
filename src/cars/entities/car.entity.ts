import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
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
