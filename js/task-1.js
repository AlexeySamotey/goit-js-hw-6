// Write code under this line
const getUserNames = array => array.map(({ name }) => name);
const users = [];
console.log(getUserNames(users));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */
// Деструктурирующее присваивание для параметра функции
// PS Деструктурирующее присваивание(ДП):

// Объект как параметр без ДП
// const object = { num: 2 };
// function getNum(obj) {
//     return obj.num;
// }
// console.log(getNum(object)); // 2
// ДП
// const object = { num: 2 }
// // const num  =  object.num;
// const { num } = object;
// console.log(num) // 2
// Объект как параметр c ДП
// const object = { num: 2 }
// //function getNum (obj) { return obj.num; }
// function getNum({ num }) { return num; }
// console.log(getNum(object)) // 2
