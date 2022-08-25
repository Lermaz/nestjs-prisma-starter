import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    return await this.prisma.post.create({ data: createPostDto });
  }

  async findAll() {
    return await this.prisma.post.findMany({
      where: { published: true },
    });
  }

  async findDrafts() {
    return await this.prisma.post.findMany({
      where: { published: false },
    });
  }

  async findOne(id: number) {
    return await this.prisma.post.findUnique({ where: { id: id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id: id },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({ where: { id: id } });
  }
}
