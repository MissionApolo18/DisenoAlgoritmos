let arrayLenght = prompt('Ingrese el tamaño del arreglo: ');

function arrayGenerator(length) {
    let randArray = []
    for (let i = 0; i < length; i++) {
        let randNum = Math.floor(Math.random()*100)
        randArray.push(randNum);
    }

    return randArray
}

const arr = arrayGenerator(arrayLenght);
arr.forEach((el)=>{
    console.log(el)
});
function minimoyMax(arr) {
    var minimo;
    var maximo;
    for (let a = 0; a < length; a++) {
        if (a > arr) {
            minimo = arr;
        }
        if (a < arr) {
            maximo = arr;
        }
    }
    return minimo,maximo
}
