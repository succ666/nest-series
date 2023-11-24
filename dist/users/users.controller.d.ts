import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(role: 'INTERN' | 'ENGINEER' | 'ADMIN'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    createUser(createUserDto: CreateUserDto): {
        name: string;
        email: string;
        role: "INTERN" | "ENGINEER" | "ADMIN";
        id: number;
    };
    updateUser(id: number, updateUserDto: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    deleteOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
