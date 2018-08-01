export interface UserInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class UserModel implements UserInterface {
    id = 0;
    firstName = '';
    lastName = '';
    email = 'sample@example.com';
    password = 'admin';
}
