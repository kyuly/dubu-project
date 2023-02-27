import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from './entity/board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateBoard } from './types/update-board.interface';
import { CreateBoard } from './types/create-board.interface';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>,
  ) {}

  async updateBoard(idx: number, dto: UpdateBoard) {
    return this.boardRepository.update(idx, dto);
  }

  async createBoard(dto: CreateBoard) {
    return this.boardRepository.save(dto);
  }

  async deleteBoard(idx: number): Promise<void> {
    const result = await this.boardRepository.delete(idx);

    console.log('result : ', result);
  }
}
