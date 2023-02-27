import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Render,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entity/board.entity';
import { Between, Repository } from 'typeorm';
import { SearchBoardDto } from './dto/search-board.dto';
import { UpdateBoard } from './types/update-board.interface';
import { BoardsService } from './boards.service';
import { CreateBoard } from './types/create-board.interface';

@Controller('boards')
export class BoardsController {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
    private boardService: BoardsService,
  ) {}

  @Get()
  @Render('board/index')
  async index(@Query() dto: SearchBoardDto) {
    return {
      boards: await this.boardRepository.find({
        where: {
          injectTime: Between(dto.startDateTime, dto.endDateTime),
        },
        skip: (dto.page - 1) * dto.limit,
        take: dto.limit,
      }),
    };
  }

  @Get('/:idx/detail')
  @Render('board/detail')
  async detail(@Param('idx') idx: number) {
    const board = await this.boardRepository.findOne({ where: { idx } });

    if (!board) {
      throw new NotFoundException(`Can't find Board`);
    }

    return board;
  }

  @Put('/:idx')
  @UsePipes(ValidationPipe)
  @Render('/board')
  async updateBoard(@Param('idx') idx: number, @Body() dto: UpdateBoard) {
    await this.boardService.updateBoard(idx, dto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  @Render('/board')
  async createBoard(@Body() dto: CreateBoard) {
    await this.boardService.createBoard(dto);
  }

  @Delete('/:idx')
  @Render('/board')
  async deleteBoard(@Param('idx') idx: number): Promise<void> {
    return this.boardService.deleteBoard(idx);
  }
}
