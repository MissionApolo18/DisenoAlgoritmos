//Algoritmo de Fibonacci
//Hecho por Atenea Gutiérrez / MissionApolo18
let n = prompt('Ingresé el número que se quiere obtener el factorial: ');
const i = 0, a = n - 1, m = 0;

function Factorial(n) {
  while (a != 0) {
    a = n - 1;
    m = n * a;
    i = i + m;
    n = n - 1;
    if (n = 1 || n < 3) {
      n = 1;
    }
  }
  return i
}