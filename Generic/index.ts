// 1. 문자 / 숫자 / boolean 기본 타입
const getPrimitive = (arg1: string, arg2 : number ,arg3: boolean) : [boolean, number, string] => {
     return [arg3, arg2, arg1]
}
getPrimitive('1',123,true)

// 2. any type(js와 같음)
const getAny = (arg1: any, arg2 : any ,arg3: any) : [any, any, any] => {
     console.log(arg1 + 1); // type이 any여서 다음과 같은 연산이 가능함
     return [arg3, arg2, arg1]
}
getAny('1',123,true)

// 3. unknown 타입 => 어떤 타입인지 알 수 없으므로 연산같은 작업 시 타입을 명확히 하지 
// 않으면 오류 발생 
const getUnknown = (arg1: unknown, arg2 : unknown ,arg3: unknown) : [unknown, unknown, unknown] => {
     if( arg1 === "number") { // any와 다르게 number라고 타입을 명시해 줘야 연산이 가능
          console.log(arg1 + 1);
     }
     return [arg3, arg2, arg1]
}
getUnknown('1',123,true)

// 4. generic 타입
// generic을 통해 주어진 arguments를 자동으로 할당 받을 수 있다.
function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2 : MyType2 ,arg3: MyType3) : [MyType3, MyType2, MyType1] {
     return [arg3, arg2, arg1]
}
// generic을 사용하지만 다음과 같이 미리 타입을 지정하여 사용할 수도 있다.
const result = getGeneric<string,number,boolean>('1',123,true)


// 4. generic 타입 - 2
// generic을 통해 주어진 arguments를 자동으로 할당 받을 수 있다.
function getGeneric2<T1, T2, T3>(arg1: T1, arg2 : T2 ,arg3: T3) : [T3, T2, T1] {
     return [arg3, arg2, arg1]
}
// generic을 사용하지만 다음과 같이 미리 타입을 지정하여 사용할 수도 있다.
const result2 = getGeneric2('1',123,true)


// 4. generic 타입 - 3
// generic을 통해 주어진 arguments를 자동으로 할당 받을 수 있다.
const getGeneric3 = <T, U, V>(arg1: T, arg2 : U ,arg3: V) : [V, U, T] => {
     return [arg3, arg2, arg1]
}
// generic을 사용하지만 다음과 같이 미리 타입을 지정하여 사용할 수도 있다.
const result3 = getGeneric3('1',123,true)


