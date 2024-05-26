export class LoginDTO {
 
    Username?: string;
    Password?: string;

    constructor(firstName?: string, lastName?: string) {
        this.Username = firstName;
        this.Password = lastName;
    }
}