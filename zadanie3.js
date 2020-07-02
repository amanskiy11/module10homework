// let str = "Hello";
// let res = "";
// for (let i = str.length; i >= 0; i--) {
//     res += str.charAt(i);
// }
// console.log(res)

// Ваш вариант рабочий и решает поставленную задачу, поэтому задание засчитано, но вот более короткий и быстрый вариант, без использования цикла :)

let string = "Hello";
let reverseString = string.split("").reverse().join("");

console.log(reverseString);