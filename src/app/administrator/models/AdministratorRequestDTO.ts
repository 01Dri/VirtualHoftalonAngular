export class AdministratorRequestDTO {
    firstName?: string;
    lastName?: string;
    cpf?: string;
    email?: string;
    dateBirth?: Date;
    password?: string;

    constructor(firstName?: string, lastName?: string, cpf?: string, email?: string, dateBirth?: Date, password?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.email = email;
        this.dateBirth = dateBirth;
        this.password = password;
    }
}