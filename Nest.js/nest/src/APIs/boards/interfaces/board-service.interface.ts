import { CreateBoardInput } from "../dto/create-board.dto";

// createBoardInput만 arguements로 올 수 있도록 interface 생성
export interface IBoardsServiceCreate {
     createBoardInput: CreateBoardInput
   }