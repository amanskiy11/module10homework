let x = prompt('Введите x')
let num = typeof x === "number"
let str = typeof x === "string"
let bool = typeof x === "boolean"
switch (x) {
    case num:
        console.log('x - число')
        break;
    case str:
        console.log('x - строка')
        break;
    case bool:
        console.log('x - логический тип')
        break;
    default:
        console.log('Тип x не определён')
}