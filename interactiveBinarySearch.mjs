const interactiveBinarySearch = (numbers = [], numberToSearch = 0) => {
  let low = 0
  let high = numbers.length - 1

  while (low <= high) {
    let midIndex = Math.round((low + high) / 2)
    let midNumber = numbers[midIndex]

    if (midNumber === numberToSearch)
      return midIndex
    else if (numberToSearch > midNumber)
      low = midIndex + 1
    else
      high = midIndex - 1
  }

  return null
}


const result = interactiveBinarySearch([1, 2, 3, 4, 5, 6], 5)
console.log(`Search result. Index: ${result}`)