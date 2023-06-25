import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.dto';

@Resolver()
export class BoardsResolver {
  constructor(private readonly BoardsService: BoardsService) {}
  
  @Query(() => [Board], {nullable: true}) // nullable => 빈 값 리턴 가능
  fetchBoards(): Board[] {
    return this.BoardsService.findAll();
  }

  @Mutation(() => String)
  createBoards(
    // @Args("writer") writer: string,
    // @Args("title") title: string,
    // @Args({name: 'content', nullable: true}) content: string
    @Args('createBoardInput') createBoardInput: CreateBoardInput
  ): string {
    return this.BoardsService.createBoard({createBoardInput});
  }
}
