import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('posts')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('access-token')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiCreatedResponse({ type: PostEntity })
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOkResponse({ type: [PostEntity] })
  async findAll() {
    return await this.postsService.findAll();
  }

  @Get('drafts')
  @ApiOkResponse({ type: [PostEntity] })
  async findDrafts() {
    return await this.postsService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({ type: PostEntity })
  async findOne(@Param('id') id: string) {
    return await this.postsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: PostEntity })
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PostEntity })
  async remove(@Param('id') id: string) {
    return await this.postsService.remove(+id);
  }
}
