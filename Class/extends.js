// Monster class
class Monster {

     // property
     power = 1

     // constructor
     constructor(power) {
          this.power = power;
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
     constructor(power) {
          super(power);
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

const queenmonster = new queenMonster(30);
console.log(queenmonster.attack());
console.log(queenmonster.run());