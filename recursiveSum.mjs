const recursiveSum = (numbers = []) => {
  if (numbers[0] === undefined) return 0
  return numbers[0] + recursiveSum(numbers.splice(1))
}

const result = recursiveSum([1, 2, 3, 4])
console.log(`Resursive sum result: ${result}`)