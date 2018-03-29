function produceDrivingRange(range){
  return function(startingLocation, endingLocation){
    let totalBlocks = Math.abs(parseInt(endingLocation) - parseInt(startingLocation))
    if (totalBlocks <= range){
      return `within range by ${totalBlocks - range}`;
    } else {
      return `${totalBlocks - range} blocks out of range`;
    }
  }
}
