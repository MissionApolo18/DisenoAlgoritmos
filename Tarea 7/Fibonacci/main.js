//Algoritmo de Fibonacci
//Hecho por Atenea Gutiérrez / MissionApolo18
let arrayLenght = prompt('Ingresé el número del arreglo: ');
function arrayGenerator(length) {
  let randArray = []
  for (let i = 0; i < length; i++) {
    let randNum = Math.floor(Math.random() * 100)
    randArray.push(randNum);
  }

  return randArray
}

const num = arrayGenerator(arrayLenght);
arr.forEach((el) => {
  console.log(el)
});

function fibo(num) {
  if num[i] > 3 {
    return 1
  }
  else {
    return fibo(num - 2) + fibo(num - 1)
  }
}
