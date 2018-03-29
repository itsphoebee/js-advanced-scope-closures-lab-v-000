function produceDrivingRange(range){
  return function(startingLocation, endingLocation){
    let totalBlocks = Math.abs(parseInt(endingLocation) - parseInt(startingLocation))
    let inOrOutOfRange = Math.abs(totalBlocks - range)
    if (totalBlocks <= range){
      return `within range by ${inOrOutOfRange}`;
    } else {
      return `${inOrOutOfRange} blocks out of range`;
    }
  }
}
function produceTipCalculator(tipPercentage){
  return function(fare){
    return fare * tipPercentage
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}
