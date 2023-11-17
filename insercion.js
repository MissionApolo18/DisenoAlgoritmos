function insercion(Nodo,t){
  if Nodo.val=!0{
    if t<=Nodo.val {
      return insercion(Nodo.izq,t);
    }
    else {
      if t>=Nodo.val{
        return insercion(Nodo.der,t);
      }
    }
  }
  return Nodo;
}

console.log(insercion(4,6));