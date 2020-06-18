let valuePrompt = prompt("Введите значение");
let valuePromptMod = + valuePrompt;
let res = valuePromptMod % 2;
if (Number.isNaN(valuePromptMod) === true) {
    console.log('Упс, кажется, вы ошиблись')
} else
    if (typeof valuePromptMod === "number")
        if (res === 0) {
        console.log('Число четное')
    }       else {
            console.log(`Число нечетное`)
    }   else
        console.log('Упс, кажется, вы ошиблись')