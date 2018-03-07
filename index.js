function produceDrivingRange (threshold){
  return function(start, end){

    let startblock = start;
    let endblock = end;
    let distance = Math.abs(endblock - startblock)
    let diff = threshold - distance

    if( diff > 0){
         return `within range by ${diff}`
       } else {
         return `${Math.abs(diff)} blocks out of range`
       }

  }
}
