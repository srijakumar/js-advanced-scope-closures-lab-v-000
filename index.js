function produceDrivingRange (threshold){
  return function(start, end){

    let startblock = parseInt(start);
    let endblock = parseInt(end);
    let distance = Math.abs(endblock - startblock)
    let diff = threshold - distance

    if( diff > 0){
       return `within range by ${diff}`
     } else {
       return `${Math.abs(diff)} blocks out of range`
     }

  }
}


function produceTipCalculator(percent){
  return function calculate(fare){
    return fare*percent;
  }
}


function createDriver(){
  let driverId = 0

  return class {
    constructor (name){
      this.id = ++driverId;
      this.name = name
    }
  }
}
