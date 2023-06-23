interface IProfile {
     name: string;
     age: number;
     school: string;
     hobby?: string;
}

// 1. Partial 타입 => ?형태로 모두 변경
type a = Partial<IProfile>;

// 2. Required 타입 => 필수
type b = Required<IProfile>;

// 3. Pick 타입(선택)
type c = Pick<IProfile, "name" | "age">;

// 4. Ommit 타입(제외)
type d = Omit<IProfile, "school">

// 5. Record 타입(합)
type e = "철수" | "영희" | "훈이" // Union 타입
let child1: e = "철수" // 철수, 영희, 훈이 만 됨
let child2: string = "사과" // 철수, 영희, 훈희, 사과, xxx 다 됨

type eRecord = Record<e,number> // 각각의 record에 number 타입 할당
type eRecord2 = Record<e,IProfile> // IProfile

// 6. object의 key로 Union type 만들기
type g = keyof IProfile // name, age, school, hobby
let myProfile: g = "hobby"

// 7. type vs interface
// interface는 선언병합 가능
interface IProfile {
     candy: number // 선언병합으로 candy 추가
}

let profile: Partial<IProfile> = {
     candy: 10
}