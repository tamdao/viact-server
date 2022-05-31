import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.usersRepository.create({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      phoneNumber: createUserDto.phoneNumber,
      password: hashPassword,
      username: createUserDto.username,
      email: createUserDto.email,
    });
    await this.usersRepository.save(user);
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({
      id,
    });
  }

  findOneByUsernameOrEmail(usernameOrEmail: string): Promise<User | null> {
    return this.usersRepository.findOneBy([
      {
        username: usernameOrEmail,
      },
      {
        email: usernameOrEmail,
      },
    ]);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
