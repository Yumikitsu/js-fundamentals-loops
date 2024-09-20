const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 10) {
    hasTen = true
    indexOfTen = i
    break
  }
}

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    divisibleByThreeCount++
  }
}

// 3. use a for loop to find the average of the numbers in the array
let average = 0

for (let i = 0; i < nums.length; i++) {
  average += nums[i] / nums.length
}

// 4. use a for loop to find the largest number in the array
let largest = 0

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i]
  }
}

// 5. use a for loop to find the smallest number in the array
let smallest = 100000

for (let i = 0; i < nums.length; i++) {
  if (nums[i] < smallest) {
    smallest = nums[i]
  }
}

// 6. find the median of the numbers in the array
let median = 0

const sortedNumsIndex = []

// Create a sortedNumsIndex array which sorts the indicies of the nums array what elements needs to be where in an ascending order of the nums array
for (let i = 0; i < nums.length; i++) {
  let lowest = 100000
  let indexOfLowest = -1
  if (sortedNumsIndex.length > 0) {
    lowest = nums[sortedNumsIndex.length - 1]
  }
  for (let j = 0; j < nums.length; j++) {
    if (lowest >= nums[j] && !sortedNumsIndex.includes(j)) {
      lowest = nums[j]
      indexOfLowest = j
    }
  }
  sortedNumsIndex.push(indexOfLowest)
}

// Calculate the number in the middle of the array
const middle = Math.floor(nums.length / 2)

// Get the median of the nums array
if (nums.length % 2 === 0) {
  median = Math.floor(
    (nums[sortedNumsIndex[middle - 1]] + nums[sortedNumsIndex[middle]]) / 2
  )
} else {
  median = nums[sortedNumsIndex[middle]]
}

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
