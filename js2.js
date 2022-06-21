//변수  let, const vs var  차이

console.log(name);
var name='mike'
//변수를 나중에 지정해도 에러가 나오지 않음
//스코프안에서 지정한 변수를 바깥쪽에서도 사용가능, 단 함수스코프는 안됨
//ex) if (){var name='mike'}   console.log(name);  가능
  

console.log(name2);
let name2='jane';
//변수를 나중에 지정하면 error가 나옴
//스코프안에서 지정한 변수는 바깥쪽에서는 사용불가
'-----------------------------------------------------------------'

//생산자 함수

function Item(title, price, ) {
    this.title = title;
    this.price = price;
    this.showprice = function () {
      console.log(`가격은 ${price}원 입니다.`);
    };
  }
  
  const Item1 = new Item('핸드폰', '40000');  // new를 꼭 붙여주기
  const Item2 = new Item('냉장고', '50000');
  
  console.log(Item1, Item2);
  Item2.showprice()

  //method

function makeObj(key, val) {
    return {
      [key]: val,
    };
  }
  const obj1 = makeObj('냉장고', 30);
  ---------------------------
 //복제 method

const User = {
    name : 'mike',
    age : 30
  };
  
  const User2 = Object.assign({}, User);  //양식을 복사해온다고 생각하면 된다   Object.assign({})     {}초기값=>변화줄수 있음
  User2.name = 'jane'
  
  
  const User3 = User;
  console.log(User2, User3);
  
  const result1 = Object.keys(User);   //key 값만 나열
  const result2 = Object.values(User);  //value 값만 나열
  const result3 = Object.entries(User);  // 둘다 나열
  console.log(result1, result2, result3)

  '-------------------------------------------------------------------'

//배열 method
let arr = [1, 2, 3, 4, 5];
    //splice(n,m)     => n번째부터 m개 지워라
    arr.splice(1,2);   // [1, 4, 5]
  
    //splice(n,m,x)   => n번째부터 m개지우고 x 추가
    arr.splice(1,2,500,500, 500);  //[1, 500, 500, 500, 4, 5]

    //splice() =>삭제된 요소 반환
    let result = arr.splice(1,2); //[2, 3]

     //slice(n,m)   => n번째부터 m-1까지 반환
    let arr2 = arr.slice(1,4);  //[2, 3]

    //slice()   => 전부 반환
    let arr2 = arr.slice(); //[1, 2, 3, 4, 5]

    //arr.concat(arr2, arr3) 합쳐서 새배열 반환
    let arr2 = arr.concat([4,5]);    //[1, 2, 3, 4, 5, 4, 5]
    let arr3 = arr.concat([1,2],[3,4]);  //[1, 2, 3, 4, 5, 1, 2, 3, 4]

--------------------------------------------------------
// find vs filter

const arr = [1,2,3,4,5,6];

 const result = arr.find((num) => {
   return num % 2 === 0;
 });

 console.log(result);      //    2

 const result2 = arr.filter((num2) => {
  return num2 % 2 === 0;
});

console.log(result2);   // [2, 4, 6]

