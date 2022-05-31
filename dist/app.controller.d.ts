import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
export declare class AppController {
    private readonly appService;
    private authService;
    private userService;
    constructor(appService: AppService, authService: AuthService, userService: UsersService);
    getHello(): string;
    login(req: any): Promise<{
        accessToken: string;
    }>;
    getProfile(req: any): Promise<import("./users/entities/user.entity").User>;
}
