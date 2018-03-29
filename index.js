function produceDrivingRange(range){
  return function(startingLocation, endingLocation){
    if (endingLocation - startingLocation <= range){
      return true
    }
  }
}