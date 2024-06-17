// src/app/models/appointments/appointment-response-dto.ts

export class AppointmentResponseDTO {
    constructor(
      public id?: number,
      public name?: string,
      public patientId?: number,
      public doctorId?: number,
      public doctorName?: string,
      public sectorId?: number,
      public sectorName?: string,
      public timestamp?: Date,
      public description?: string
    ) {}
  }
  