// Monster class
class Monster {

     // constructor
     // public, private, protected, readonly 중 1개라도 있으면 아래 this 및 변수 생략 가능
     // this.power = power

     // public => 어디서든 사용 가능, 수정 가능
     // private => class 안에서만 사용 가능
     // protected => 상속 까지는 사용 가능하나 다른 외부에서 사용 불가능
     // readonly => public과 같이 어디서든 사용은 가능하나 수정 불가능
     // private readonly => class 안에서만 사용가능하고 수정도 불가능
     
     constructor(public power: number) {
     }

     // method
     attack() {
          console.log(`내 공격력은 ${this.power} 야`);
     }

     run = () => {
          console.log('그냥 도망가자');
     }
}

// 새로운 kingmonster class가 부모 class인 monster 클래스를 상속 받아 필요한 속성과
// 메소드를 사용할 수 있다.
class kingMonster extends Monster {

     // 자식 class에서 parameter를 받아서 부모 constructor에 넘겨주고 싶을 때,
     // super 메소드를 사용
    
     attack = () => {
          // 부모 객체에서 상속 받더라도 parameter를 private으로 선언하여 해당 변수 상속 불가능
          console.log(this.power);
          
     }

     // 부모 class에서 상속받은 메소드를 필요한 부분만 다시 재정의 하여 사용할 수 있다.
     // override => 이미 정의한 메소드를 필요에 따라 재정의 하여 사용
     run = () => {
          console.log(`빠르게 도망가자`);
     }
}

class queenMonster extends Monster {
     run = () => {
          console.log(`느리게 도망가자`);
     }
}

const kingmonster = new kingMonster(20);
console.log(kingmonster.attack());
console.log(kingmonster.run());
console.log(kingmonster.power);

const queenmonster = new queenMonster(30);
console.log(queenmonster.attack());
console.log(queenmonster.run());