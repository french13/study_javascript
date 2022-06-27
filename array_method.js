// splice  vs delete

let arr = ["I", "go", "home"];
delete arr[1];
console.log(arr);   // ['I', 비어 있음, 'home']

let arr2 = ["I", "go", "home"];
arr2.splice(1,1);
console.log(arr2); //['I', 'home']

let arr3 = ["I", "go", "home"];
let arr4 = arr3.splice(1,1, "control", "sound"); 
console.log(arr3);   //['I', 'control', 'sound', 'home']
console.log(arr4); // ['go']

// arr.splice(index, index부터 삭제 갯수, 추가1, 추가2 )
"-----------------------------------------------------------------------"
// slice

let arr5 = ["A","B","C","D","E"];
arr5.slice(1, 3);
console.log(arr5) // ['B', 'C']  slice 1,3 에서 3은 제외