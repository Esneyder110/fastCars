import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car, CarDocument } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}
  async create(createCarDto: CreateCarDto) {
    const newCar = new this.carModel(createCarDto);
    return await newCar.save();
  }

  async findAll() {
    return await this.carModel.find();
  }

  async findOne(id: string) {
    const car = await this.carModel.findOne({ _id: id });
    if (!car) throw new NotFoundException(`Car with id #${id} not found`);
    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const car = await this.carModel.findByIdAndUpdate(
      id,
      { $set: updateCarDto },
      { new: true },
    );
    if (!car) throw new NotFoundException(`Car with id #${id} not found`);
    return car;
  }

  async remove(id: string) {
    const car = await this.carModel.findByIdAndDelete(id);
    if (!car) throw new NotFoundException(`Car with id #${id} not found`);
    return car;
  }
}
