import * as pluralize from 'pluralize'
import { SharedFunc } from './SomeSharedLib'

console.log('Hello, world from app.ts')

console.log('This illustrates pulling in an exported function from SomeSharedLib')
console.log(SharedFunc(100))

console.log('This illustrates how we can pull in a third-party library from NPM, including its type definition')


const counts = [0, 1, 10]
counts.forEach((count) => {
  console.log(` - I see ${count} ${pluralize('dog', count)}`)
})

