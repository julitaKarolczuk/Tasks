// 1
const numbers = [1, 2, 3]
const doubleNumbers = numbers.map(number => number * 2)

// 2
const numbersWithoutLast = numbers.slice(0, numbers.length - 1)

// 3
let outputKey = ``
const input = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1, 2, 3]
  },
  'f': {}
}
function flattenMap (map) {
  const keys = Object.keys(map)
  for (key of keys) {
    const output = {}
    outputKey += `${key}/`
    console.log(key, typeof map[`${key}`])
    if (typeof map[key] === 'object' && Object.keys(map[key]).length != 0) {
      return flattenMap(map[key])
    }else {
        console.log('outputKeyyy: ' + outputKey)
        output[`${outputKey}`] = map[key]
        outputKey = outputKey.slice(0, -2)
        console.log(output)
      }
    }
  }

flattenMap(input)
