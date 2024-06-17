// src/app/models/appointments/appointment-response-dto.ts

export class RefreshTokenRequestDTO {
    constructor(
      public refreshToken?: string,
      public loginId?: number
    ) {}
  }
  