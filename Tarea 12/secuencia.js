function secuencia(m){
    let val=m;
    if (m = 0) {
      return 0;
    } else {
      console.log(val)
      return val=secuencia(m-1);
    }
  }
  console.log(secuencia(15));