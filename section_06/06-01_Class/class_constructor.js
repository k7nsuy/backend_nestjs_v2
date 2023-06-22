// Date 내장 객체
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);

// Monster class
class Monster {

     // property
     power = 1

     // constructor - 내장함수
     constructor(power) {
          this.power = power;
     }

     // method
     attack() {
          console.log(`내 공격력은 ${this.power} 야`);
     }

     run = () => {
          console.log('run');
     }
}

// class를 통한 새로운 객체 생성
// 새로운 객체를 만들어 실제 하드웨어 메모리에 할당한 상태를 `instance`화 라고 한다.
const monster = new Monster(30)
console.log(monster.attack());

// 새로운 monster 객체를 생성하고 싶을 때, 똑같은 속성과 메소드를 사용하기 위해 
// 새로운 monster class를 만드는 것은 큰 리소스 낭비가 될 수 있다. constructor를 통해 
// 새로운 속성을 argument로 보내고 constructor는 그 parameter를 받아 각각의 독립적인
// 속성을 사용할 수 있다. 

// argument => 어떤 함수의 호출시에 보내는 값
// parameter => 그 전달된 argument를 받아 들이는 변수

const new_monster = new Monster(20)
console.log(new_monster.attack());

