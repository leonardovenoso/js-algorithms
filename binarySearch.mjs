const binarySearch = (arrayOfNumbers = [], numberToSearch = 0) => {
  let low = 0
  let high = arrayOfNumbers.length - 1

  while (low <= high) {
    let midArrayIndex = Math.round((low + high) / 2)
    let midNumberInArray = arrayOfNumbers[midArrayIndex]

    if (midNumberInArray === numberToSearch)
      return midArrayIndex
    else if (numberToSearch > midNumberInArray)
      low = midArrayIndex + 1
    else
      high = midArrayIndex - 1
  }

  return null
}


const result = binarySearch([1, 2, 3, 4, 5, 6], 5)
console.log(`Search result. Index: ${result}`)