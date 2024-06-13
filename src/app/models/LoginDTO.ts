export class LoginDTO {
 
    username?: string;
    password?: string;

    constructor(firstName?: string, lastName?: string) {
        this.username = firstName;
        this.password = lastName;
    }
}