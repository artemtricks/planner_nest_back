import { UseGuards } from '@nestjs/common';
import { JwtGuardAuth } from '../guards/jwt.guard';

export const Auth = () => UseGuards(JwtGuardAuth);
