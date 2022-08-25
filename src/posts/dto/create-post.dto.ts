import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  authorId: number;

  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  published: boolean;
}
