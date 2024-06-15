import { AppointmentResponseDTO } from "../appointments/AppointmentsResponseDTO";

export class PatientReponseDTO {
    id?: number;
    name?: string;
    phone?: string;
    cpf?: string;
    rg?: string;
    email?: string;
    birthDate?: Date;
    classification?: string;
    appointments?: AppointmentResponseDTO[]


    constructor(id?: number, name?: string, phone?: string, cpf?: string, rg?: string, email?: string, birthDate?: Date, classification?: string, appointments?: AppointmentResponseDTO[]) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.cpf = cpf;
        this.rg = rg;
        this.email = email;
        this.birthDate = birthDate;
        this.classification = classification;
        this.appointments = appointments;
    }
}