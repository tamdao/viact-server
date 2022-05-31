import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(usernameOrEmail: string, pass: string): Promise<any>;
    login(user: User): Promise<{
        accessToken: string;
    }>;
}
