import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(usernameOrEmail: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsernameOrEmail(
      usernameOrEmail,
    );

    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      return null;
    }
    return user;
  }

  async login(user: User) {
    const payload = { sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
