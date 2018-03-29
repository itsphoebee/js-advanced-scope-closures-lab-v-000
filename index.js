function produceDrivingRange(range){
  return function(startingLocation, endingLocation){
    if (Math.abs(endingLocation - startingLocation) <= range){
      return `within range by ${endingLocation - startingLocation}`
    }
  }
}
