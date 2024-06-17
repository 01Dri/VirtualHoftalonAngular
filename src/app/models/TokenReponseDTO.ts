// src/app/models/appointments/appointment-response-dto.ts

export class TokenResponseDTO {
    constructor(
      public accessToken?: string,
      public expireAt?: Date,
      public refreshToken?: string,
    ) {}
  }
  