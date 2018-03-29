function produceDrivingRange(range){
  return function(startingLocation, endingLocation){
    if (parseInt(endingLocation) - parseInt(startingLocation) <= parseInt(range)){
      return `within range by ${endingLocation - startingLocation}`
    }
  }
}
