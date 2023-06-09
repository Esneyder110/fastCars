import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().lean();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findOne({ _id: id }).lean();
    if (!user) throw new NotFoundException(`User with id #${id} not found`);
    return user;
  }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email: email }).lean();
    if (!user)
      throw new NotFoundException(`User with email ${email} not found`);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(
      id,
      { $set: updateUserDto },
      { new: true },
    );
    if (!user) throw new NotFoundException(`User with id #${id} not found`);
    return user;
  }

  async remove(id: string): Promise<User> {
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) throw new NotFoundException(`User with id #${id} not found`);
    return user;
  }
}
