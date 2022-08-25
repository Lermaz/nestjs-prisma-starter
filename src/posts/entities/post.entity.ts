import { ApiProperty } from '@nestjs/swagger';
import { Post, User } from '@prisma/client';
import { BaseModel } from 'src/common/models/base.model';

export class PostEntity extends BaseModel implements Post {
  @ApiProperty({ maxLength: 255 })
  title: string;

  @ApiProperty({ required: false, nullable: true })
  content: string;

  @ApiProperty({ default: false })
  published: boolean;

  @ApiProperty()
  author: User;

  @ApiProperty()
  authorId: number;
}
