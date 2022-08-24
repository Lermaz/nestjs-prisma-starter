import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsOptional()
  @MinLength(3)
  @ApiProperty()
  firstname: string;

  @IsOptional()
  @MinLength(3)
  @ApiProperty()
  lastname: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsEnum(Role)
  role: Role;
}
