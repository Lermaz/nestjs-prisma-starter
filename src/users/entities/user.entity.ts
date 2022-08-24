import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { BaseModel } from 'src/common/models/base.model';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class UserEntity extends BaseModel implements User {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  firstname: string | null;

  @ApiProperty()
  lastname: string | null;

  @ApiProperty()
  role: Role;

  // @ApiProperty()
  // posts: Post[];
}
