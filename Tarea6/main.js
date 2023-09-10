let arrayLenght = prompt('Ingrese el tamaño del arreglo: ');

function arrayGenerator(length) {
    let randArray = []
    for (let i = 0; i < length; i++) {
        let randNum = Math.floor(Math.random()*100)
        randArray.push(randNum);
    }

    return randArray
}
const suma = 0, prom = 0, arr = arrayGenerator(arrayLenght);

function promedio (arr) {
    for (let n = 0; n < arr; n ++) {
        suma+=arr[arr.length-1] + arr.length;
    }
    prom = suma/(arr.length+1);
    return prom
}