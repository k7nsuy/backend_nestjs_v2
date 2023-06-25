import { InputType, PartialType } from "@nestjs/graphql"
import { CreateProductInput } from "./create-product.input"

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
     // Partial을 통해 아래 내용들을 상속 받음
     // name?: string
     // description?: string
     // price?: number          
}

// PickType(CreateProductInput, ['name', 'description']) // 해당 속성만 선택
// OmitType(CreateProductInput, ['description']) // 해당 속성만 빼기
// PartialType(CreateProductInput) // ? 만들기