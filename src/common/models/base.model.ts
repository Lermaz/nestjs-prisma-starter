import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseModel {
  @ApiProperty()
  id: number;

  @ApiProperty({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;

  @ApiProperty({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
