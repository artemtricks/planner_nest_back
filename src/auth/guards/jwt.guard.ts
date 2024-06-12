import { AuthGuard } from '@nestjs/passport';

export class JwtGuardAuth extends AuthGuard('jwt') {}
