import { TokenResponseDTO } from "./TokenReponseDTO";

export class LoginResponseDTO {
 
    constructor(
        public id?: number,
        public username?: string,
        public role?: string,
        public tokenResponseDto?: TokenResponseDTO,
    ){}
}
