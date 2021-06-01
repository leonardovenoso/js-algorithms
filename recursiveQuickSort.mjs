const recursiveQuickSort = (numbers = []) => {
  if (numbers[0] === undefined || numbers[1] === undefined) {
    return numbers || []
  }

  const pivot = numbers[Math.round(numbers.length / 2)]
  let numbersLesserThanPivot = []
  let numbersGreaterThanPivot = []
  let numbersEqualToPivot = []

  numbers.forEach(number => {
    if (number < pivot) {
      numbersLesserThanPivot.push(number)
    } else if (number === pivot) {
      numbersEqualToPivot.push(number)
    } else {
      numbersGreaterThanPivot.push(number)
    }
  })

  return [...recursiveQuickSort(numbersLesserThanPivot),
    numbersEqualToPivot,
    ...recursiveQuickSort(numbersGreaterThanPivot)]
}

const result = recursiveQuickSort([33, 23, 23, 10, 7, -1, 0, 0, -1, 15, 44, 1, 1, 45, 44, 15, 7])
console.log(`Resursive quick sort result: ${result}`)