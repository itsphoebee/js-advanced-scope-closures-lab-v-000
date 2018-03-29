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
