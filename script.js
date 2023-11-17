// SORT ===============================

const people = ["John", "Elmer", "David", "Ann", "Zoey"]
const numbers = [5, 100, 25, 42, 1, 3000]
numbers.sort((a, b) => {
  if (a > b) return 1
  if (a < b) return -1
  return 0
})
//console.log(numbers)


// FIND ===============================
// Only outputs the first match that meet the condition
const numbersFind = [5, 3, 10, 15, 10, 34]
const found = numbersFind.find(number => number > 1)
// console.log(found)


// REVERSE ===============================

const personsReverse = ["John", "Joe", "Mary"]
personsReverse.reverse()
// console.log(personsReverse)


// INCLUDES ===============================
// Returns true if element is included in array
const animals = ["dog", "cat", "parrot", "tiger"]
// console.log(animals.includes("parrot"))


// SOME ===============================
// Returns true if at least ONE element meets the condition
const numbersSome = [1, 5, 10, 15, 18, 22, 35]
const foundSome = numbersSome.some(number => number % 5 === 0)
// console.log(foundSome)


// EVERY ===============================
// Returns true if ALL elements meet the condition
const numbersEvery = [2, 4, 6, 8, 10, 20, 50, 60]
const foundEvery = numbersEvery.every(number => number % 2 === 0)
// foundEvery && console.log('All of them matched the condition!')


// INDEXOF ===============================
// Returns the index of the element matched
const beasts = ["cat", "dog", "mouse", "dog", "bird"]
// console.log(beasts.indexOf("lion"))


// JOIN ===============================
// Concatenates the elements of an array
const students = ["John", "Joe", "Mary", "Jane"]
// console.log(students.join(", "))