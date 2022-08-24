import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prismasService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prismasService.product.create({ data: createProductDto });
  }

  findAll() {
    return this.prismasService.product.findMany({
      where: { published: true },
    });
  }

  findDrafts() {
    return this.prismasService.product.findMany({
      where: { published: false },
    });
  }

  findOne(id: number) {
    return this.prismasService.product.findUnique({ where: { id: id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prismasService.product.update({
      where: { id: id },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prismasService.product.delete({ where: { id: id } });
  }
}
