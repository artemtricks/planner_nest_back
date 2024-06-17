import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PomodoroSessionDto {
  @IsOptional()
  @IsBoolean()
  isComplited: boolean;
}

export class PomodoroRoundDto {
  @IsNumber()
  totalSeconds: number;

  @IsOptional()
  @IsBoolean()
  isComplited: boolean;
}
