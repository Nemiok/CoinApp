const sortLastMonths2DArray = (monthsArray, numberOfDesiredMonths, indexOfStartCountMonth) => {

  let sortedArray = []

  for (let currIndex = indexOfStartCountMonth; sortedArray.length < numberOfDesiredMonths; currIndex--) {
    sortedArray.push(monthsArray[currIndex])
    currIndex - 1 === -1 ?
      currIndex = monthsArray.length :
      currIndex - 1
  }

  return sortedArray
}

export default sortLastMonths2DArray