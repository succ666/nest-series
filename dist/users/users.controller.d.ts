export declare class UsersController {
    findAll(role: string): string;
    findOne(id: number): {
        id: number;
    };
    addUser(user: {}): {};
    updateUser(id: number, user: {}): {};
    deleteOne(id: number): number;
}
