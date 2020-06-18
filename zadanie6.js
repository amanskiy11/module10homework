let arr =  [1, 5, 3, 6, 2, 3, 8, 11, 4, 9, 26];
arr.sort();
function check() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]){
            return true;
        }
    }
}
let result = arr.some(check);
console.log(result)