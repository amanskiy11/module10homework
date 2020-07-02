// let arr =  [1, 5, 3, 6, 2, 3, 8, 11, 4, 9, 26];
// arr.sort();
// function check() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i+1]){
//             return true;
//         }
//     }
// }
// let result = arr.some(check);
// console.log(result)

// Возможно, не совсем правильно понято задание. Нужно было проверить, содержит массив все одинаковые элементы или нет. Если все элементы одинаковые - выводим в консоль true, если хотя бы один отличается - false. Вот правильный вариант решения:

const arr = [3, 1, 3, 3]

let isEqual = true;
const reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isEqual = false;
	}
}

console.log(isEqual);