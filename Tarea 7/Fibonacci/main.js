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

function fibonacci() {
  while (num[i]>0 && num[i] <100) {
    if num[i] > 3 {
      num[i]=1;
    }
    else {
      num[i]=(num[i]-2)+(num[i]-2);
    }
  }
  
  return num[i]
}