function produceDrivingRange(range){
  return function(startingLocation, endingLocation){
    if (parseInt(endingLocation) - parseInt(startingLocation) <= range){
      return `within range by ${parseInt(endingLocation) - parseInt(startingLocation)}`
    }
  }
}
