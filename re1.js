//변수
const PI = "3.14";  //변하지 않는 상수, 선언은 대문자로
let name = "Mike";  // 변할 수 있는 값
age = 30;
'-----------------------------------------------------'
//자료형

const name = "mike";
const age = 30;

const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = `My name is ${name}`;  //백틱키 사용!
const message2 = `My name is ${30+1}`;
'-----------------------------------------------------------------'
//typeof 연산자  객체의 속성을 알아낼수 있다.
console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof 'xxx');
console.log(typeof null);
console.log(typeof undefined);
'-------------------------------------------------------------'
//prompt  => prompt로 입력을 받으면 무조건 문자형
const name = prompt("이름을 입력하세요");
alert("감사합니다" + name + "환영합니다.");
const name2 = prompt("안녕하세요", "2022-10-20"); //(인사말, 빈칸에 적혀서 나옴)
'-----------------------------------------------------------'
 //confirm
 const isAdult = confirm("당신은 성인 입니까?");
 alert("성인인증이 되었습니다.");
 '-----------------------------------------------------------'
//alert
alert("감사합니다" + name + "환영합니다.");
alert("성인인증이 되었습니다.");
'------------------------------------------------------'
//형변환
String (문자형으로변환) Number(숫자형으로 변환) 
'------------------------------------------------------'
//비교 연산자
console.log(10 > 5);
console.log(10 == 5);
console.log(10 != 5);
'--------------------------------------------------------'
//조건문
const age = 19;

if (age > 19) {
  console.log('환영합니다');
} else if (age === 19) {
  console.log('공부 열심히 하세요');
} else {
  console.log('안녕히 가세요');
}

'-----------------------------------------------------------------'
//논리연산자
//  || or    &&  and     ! not=> ex) !a = a 가 false 이면 true

const age = prompt('나이가?', ' 나이를 적어주세요');
const isage = age > 19;
if (!isage) {
  alert('돌아가');
} else {
  alert('환영합니다.');
}
'----------------------------------------------------'
//반복문
// breack 즉시중단  continue 한번 중단하고 이어서 계속
for (let i = 0; i < 10; i++) {
    console.log(i)
  }

while(i<10){
    console.log(i);
    i++;
  }
'-------------------------------------------------------'
  //함수

function sayHello(name){
    const msg = `Hello, ${name}`
    console.log(msg);
  }
  
  sayHello('jane');
'---------------------------------------------------------------------'
  // object(객체)

const supermen = {
    name : 'clark',
    age : 33,
  }
  supermen.gender='male';
  delete superman.gender='male';
  
  console.log(supermen.#);

  -----------------------------
  function makeObject(name, age){
    return {
      name : name,
      age : age,
      hobby : 'football'
    }
  }
  
  const Mike = makeObject('mike', 30);
----------------------------
  function isAdult(user) {
    if (!('age'in user) || user.age < 20) {
      return false;
    }
      return true;
  }
  
  const Mike = {
    name: 'Mike',
    age: 30
  };
  
  const Jane = {
    name: 'Jane'
  };
'-------------------------------'

//객체 for in
const Mike = {
    name: 'Mike',
    age: 30
  };
  
  for(key in Mike){
    console.log(Mike[#])
  }
  '--------------------------------------'
  //method

let boy = {
    name: 'Mike',
    showName : function(){
     console.log(this.name)   
    }
  };
  let man = boy;
  boy = null;
  man.showName();
  '------------------------------------------'
  //배열 Array

let days = ["mon", "tue", "wed"];

days[1]= '화요일'

console.log(days[1]);

console.log(days.length);

//추가 days.push    days.unshift<=맨앞 추가
//제거 days.pop     days.shift<=맨앞 제거
