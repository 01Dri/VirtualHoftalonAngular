// src/app/models/appointments/appointment-response-dto.ts

export class AppointmentResponseDTO {
    constructor(
      public id?: number,
      public name?: string,
      public patientId?: number,
      public doctorId?: number,
      public sectorId?: number,
      public timestamp?: Date,
      public description?: string
    ) {}
  }
  