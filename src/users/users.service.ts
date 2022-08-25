import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PasswordService } from 'src/auth/password.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await this.passwordService.hashPassword(
      createUserDto.password,
    );
    createUserDto.password = hashedPassword;

    return await this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
        role: true,
        posts: {
          where: { published: true },
          select: {
            title: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
        role: true,
        posts: {
          select: {
            title: true,
          },
        },
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hashedPassword = await this.passwordService.hashPassword(
      updateUserDto.password,
    );
    updateUserDto.password = hashedPassword;

    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
