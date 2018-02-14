// 1
const numbers = [1, 2, 3]
const doubleNumbers = numbers.map(number => number * 2)

// 2
const numbersWithoutLast = numbers.slice(0, numbers.length - 1)

// 3
let outputKey = `` // add to function as param
const input = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1, 2, 3],
    'f': 'blabla'
  },
  'g': true,
  'h':{
    'j': null,
    'k': function(){
      const i = 0
      i++
      return i
    },
    'l': [[1, 2], [3, 4]]
  }
}
function flattenMap (map, out, outputKey = ``) {
  for (key of Object.keys(map)) {
    outputKey += `${key}/`
    // console.log(key, typeof map[`${key}`])
    if (map[key] != null && map[key] != 'undefined' && typeof map[key] === 'object' && Object.keys(map[key]).length != 0 && !Array.isArray(map[key])) {
      flattenMap(map[key], out, outputKey)
      outputKey = outputKey.slice(0, -2)
    }else {
      if (Array.isArray(map[key])) {
        // console.log('outputKeyyy: ' + outputKey)
        outputKey = outputKey.slice(0, -1)
        out[`${outputKey}`] = map[key]
        outputKey = outputKey.slice(0, -1)
      }else {
        // console.log('outputKeyyy: ' + outputKey)
        outputKey = outputKey.slice(0, -1)
        out[`${outputKey}`] = map[key]
        outputKey = outputKey.slice(0, -1)
      }
    }
  }
  return out
}

const x = flattenMap(input, {})

// 4

function repeat (string) {
  const chars = string.split('')
  let output = ``
  // console.log(chars)
  for (index in chars) {
    output += `${(chars[index].toString()).toUpperCase()}${((chars[index].repeat(index)).toString()).toLowerCase()}`
    if (index < chars.length - 1) {
      output += `-`
    }
  }
  // console.log(output)
  return output
}
repeat('AaCd') // "A-Bb-Ccc-Dddd"

// 5

function DNAStrand (dna) {
  const dnaChars = dna.split('')
  const output = []
  for (elem of dnaChars) {
    const index = dnaChars.indexOf(elem)

    if (dnaChars[index] === 'A') {
      output.push('T')
    }

    if (dnaChars[index] === 'T') {
      output.push('A')
    }

    if (dnaChars[index] === 'C') {
      output.push('G')
    }

    if (dnaChars[index] === 'G') {
      output.push('C')
    }
    dnaChars.splice(index, 1, 'x')
  }
  return (output.join('')).toString()
}
DNAStrand('ATTGC') // return "TAACG"

// 6

const str = "How can mirrors be real if our eyes aren't real"

function toJC (str) {
  const array = [...str]
  for (i in array) {
    if (array[i] === ' ') {
      array[Number(i) + 1] = array[Number(i) + 1].toUpperCase()
    }
  }
  return (array.join(''))
}
toJC(str)

// 7

function findShort (s) {
  const words = s.split(' ')
  const shortests = words.sort((a, b) => {
    if (a.length > b.length) {
      return 1
    }
    if (a.length < b.length) {
      return -1
    }
    return 0
  })
  return shortests[0].length
}
findShort('turns out random test cases are easier than writing out basic ones')

// 8

function createPhoneNumber (numbers) {
  const sliceArray = [numbers.slice(0, 3), numbers.slice(3, 6), numbers.slice(6)]
  const number = `(${sliceArray[0].join('')}) ${sliceArray[1].join('')}-${sliceArray[2].join('')}`
  return number
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// 9 - Find the last element of a list

function last (element) {
  if (typeof element === 'string') {
    return element.charAt(element.length - 1)
  }
  if (Array.isArray(element)) {
    return element[element.length - 1]
  }else {
    const arr = Array.of(element)
    return arr[arr.length - 1]
  }
}
last([1, 2, 3, 4])
last('xyz')
last(1, 2, 3, 4)

// 10 - Correct this code, so that the greet function returns the expected value.
function Person (name) {
  this.name = name
}

Person.prototype.greet = function (otherName) {
  return `Hi ${otherName}, my name is ${this.name}`
}

// 11 - You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

function spread(someFunction,...args){
  return someFunction.apply(this,args)
}

// 12 - Write a function named numbers that returns true if all the parameters it is passed are of the Number type. Otherwise, the function should return false
function isNumber (...args) {
  for (elem of args) {
    if (typeof elem != 'number') return false
  }
  return true
}
isNumber(1, 2, 3)
isNumber(1, 'a', 3)
isNumber(1, 3, NaN)

// 13 - Duplicate Arguments !

function duplicateArgs (...args) {
  const results = []
  args.forEach(val => {
    const comparison = results.filter(elem => elem.key === val)
    if (comparison.length != 0) {
      comparison[0].count = comparison[0].count + 1
    }else {
      results.push({key: val, count: 1})
    }
  })
  results.some(result => {
    if (result.count > 1) return true
    return false
  })
}
duplicateArgs(1, 2, 3) // returns false
duplicateArgs(1, 2, 3, 3) // returns true
duplicateArgs('1', '2', '3', '2') // returns true

// 14 - Calculating averages

const Calculator = {
  average(...args) {
    return args.length != 0 ? (args.reduce((prev, next) => prev + next)) / args.length : 0
  }
}
Calculator.average(2, 3, 4, 1)

// 15 - Anonymous Returns 

name = 'The Window'

const alpha = {
  name: 'My Alpha',
  getNameFunc: function () {
    return (function () {
      return this.name
    }).bind(this)
  }
}

// 16 - Write a function that can take in any number of arguments, and returns the sum of all of the arguments.

function sumArgs (...args) {
  return args.reduce((prev, next) => prev + next)
}

// 17 - Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.

function sumOnlyNumbers (...args) {
  const x = args.reduce((total, arg) => {
    if (typeof arg === 'number') {
      total += arg
    }
    return total 
  }, 0)
}
sumOnlyNumbers(1, 'cat', 3, 4)

// 18 - Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.

function countTheArgs(...args){
  return args.length
}
countTheArgs(1,2,3,"xDD","heh",[1,6,5])

// 19 - Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator)

function combineTwoArrays(array1, array2){
  return [...array1, ...array2]
}

// 20 - Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

function sumEveryOther(...args){
  let sum = 0
  for(i in args){
    if(Number(i)%2 === 0){
      sum += args[Number(i)] 
    }
  }
  return sum
}


//21 - Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.

function onlyUniques(...args){
  const output = []
  args.forEach(elem => {
    if(!output.includes(elem)){
      output.push(elem)
    }
  })
  return output
}

//22 - Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.

function combineAllArrays(...args){
  let result = []
  for(arg of args){
    result = [...result, ...arg]
  }
  return result
}

// 23 - Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.

function squareAndSum(...args){
  const squares = args.map(arg => arg**2) 
  return squares.reduce((prev, next) => prev + next)
}

