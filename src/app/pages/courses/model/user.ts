export interface UserInterface {
    id: number;
    firstName: string;
    secondName: string;
}

export class UserModel implements UserInterface {
    id = 0;
    firstName = '';
    secondName = '';
}
