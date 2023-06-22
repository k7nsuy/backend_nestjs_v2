// strategy
class KingRun {
     run = () => {
          console.log(`빠르게 도망가자`);
     }
}

class QueenRun {
     run = () => {
          console.log(`느리게 도망가자`);
     }
}

// Monster class
class Monster {

     // property
     power = 1

     // parameter 값을 run 속성으로 할당
     run

     // constructor
     constructor(parameter) {
          this.run = parameter
     }

     // method
     attack() {
          console.log(`내 공격력은 ${this.power} 야`);
     }

     runFunction = () => {
          this.run.run()
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

}

class queenMonster extends Monster {

}

// strategy를 통해 KingRun class의 run 메소드를 사용하기 위해 변수로 지정하여
// argument로 보낸다. 부모 class에서 constructor를 통해 parameter로 받아 속성값으로 할당
const kingrun = new KingRun()
const kingmonster = new Monster(kingrun);
console.log(kingmonster.attack());
// 부모 클래스에서 할당받은 속성값으로 KingRun class의 run 메소드 호출
console.log(kingmonster.runFunction());

const queenrun = new QueenRun()
const queenmonster = new Monster(queenrun);
console.log(queenmonster.attack());
console.log(queenmonster.runFunction());