let arrMap = new Map();
arrMap.set('1', 'one');
arrMap.set('2', 'two');
arrMap.set('3', 'three');
arrMap.set('4', 'four');
arrMap.set('5', 'five');
arrMap.set('6', 'six');
arrMap.forEach(function (value, key) {
    console.log(`Ключ - ${key}, Значение - ${value}`);
});