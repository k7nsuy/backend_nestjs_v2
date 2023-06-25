import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/board-service.interface';

// default => 싱글톤(new 한번)으로 주입할래?
// request => 매 요청마다 
// transient => 매 주입마다 
@Injectable({scope: Scope.DEFAULT}) // singleton pattern
export class BoardsService {
  findAll(): Board[] {
    const result = [
      {
        number: 1,
        writer: "1",
        title: "content",
        content: "1",
      },
      {
        number: 2,
        writer: "2",
        title: "content",
        content: "2",
      },
      {
        number: 3,
        writer: "3",
        title: "content",
        content: "3",
      }
    ]
    return result;
  }

  // createBoardInput 타입 적용
  createBoard({createBoardInput}: IBoardsServiceCreate) :string {
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.content);
    
    return '게시물 등록 성공'
  }
}
