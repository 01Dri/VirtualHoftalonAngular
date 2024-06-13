export class AdministratorReponseDTO {

    id?: number;
    firstName?: string;
    lastName?: string;
    cpf?: string;
    email?: string;
    dateBirth?: Date;
    loginId?: number;

    constructor(
        id?: number,
        firstName?: string,
        lastName?: string,
        cpf?: string,
        email?: string,
        dateBirth?: Date,
        loginId?: number
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
        this.email = email;
        this.dateBirth = dateBirth;
        this.loginId = loginId;
    }

}