//Algoritmo de Gregory
//Hecho por Atenea Gutiérrez / MissionApolo18
var num = prompt('Ingresé el número que se quiere obtener el factorial: ');
const i=0;

function Gregor() {
  while i != 0 {
    m=(((-1)^num)/(2*num+1));
    i=i+m;
    i=i*4;
  }
  return i
}