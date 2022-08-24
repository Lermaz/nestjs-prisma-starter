import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SigupDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;

  @ApiProperty({ nullable: true })
  firstname?: string;

  @ApiProperty({ nullable: true })
  lastname?: string;
}
