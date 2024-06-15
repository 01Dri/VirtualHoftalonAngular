import { cp } from "fs";

export class PatientRequestDTO {
    name?: string;
    phone?: string;
    cpf?: string;
    rg?: string;
    email?: string;
    birthdate?: Date;
    classification?: string;


    constructor(name?: string, phone?: string, cpf?: string, rg?: string, email?: string, birthDate?: Date, classification?: string) {
        this.name = name;
        this.phone = phone;
        this.cpf = cpf;
        this.rg = rg;
        this.email = email;
        this.birthdate = birthDate;
        this.classification = classification;
    }
}