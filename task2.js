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
    'e': [1, 2, 3]
  }
}
function flattenMap (map, out) {
  for (key of Object.keys(map)) {
    outputKey += `${key}/`
    // console.log(key, typeof map[`${key}`])
    if (typeof map[key] === 'object' && Object.keys(map[key]).length != 0 && !Array.isArray(map[key])) {
      flattenMap(map[key], out)
    }else {
      if (Array.isArray(map[key])) {
        // console.log('outputKeyyy: ' + outputKey)
        out[`${outputKey}`] = map[key]
        outputKey = outputKey.slice(0, -2)
      }else {
        // console.log('outputKeyyy: ' + outputKey)
        out[`${outputKey}`] = map[key]
        outputKey = outputKey.slice(0, -2)
      }
    }
  }
  outputKey = outputKey.slice(0, -2)
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

function toJC(str){
    const array = [...str]
    for(i in array){
        if(array[i] === ' '){
           array[Number(i)+1] = array[Number(i)+1].toUpperCase()
        }
    }
    return (array.join(''))
}
toJC(str)