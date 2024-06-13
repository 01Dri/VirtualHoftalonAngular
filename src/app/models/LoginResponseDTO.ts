export class LoginResponseDTO {
 
    id?: number;
    username?: string;
    role?: string;
    token?: string;


    constructor(id?: number, firstName?: string, role?: string, token?: string) {

        this.id = id;
        this.username = firstName;
        this.role = role;
        this.token = token;
    }
}