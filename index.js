function produceDrivingRange(range){
  return function(startingLocation, endingLocation){
    let totalBlocks = Math.abs(parseInt(endingLocation) - parseInt(startingLocation))
    if (totalBlocks <= range){
      return `within range by ${Math.abs(totalBlocks - range)}`;
    } else {
      return `${Math.abs(totalBlocks - range)} blocks out of range`;
    }
  }
}
