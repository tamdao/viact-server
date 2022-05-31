import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): string;
    findOne(id: number): Promise<User | null>;
    findOneByUsernameOrEmail(usernameOrEmail: string): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
