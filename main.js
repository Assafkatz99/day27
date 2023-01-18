// 1. 
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "white",
    isElectric: false
}

const arrOfObjectKeys = (Obj) => {
return Object.keys(Obj)
}

// console.log(arrOfObjectKeys(car))

// 2. 

const keysToUpperCase = (obj) => {
    new_obj = {}
    for ([k,v] of Object.entries(obj)){
        new_obj[k.toUpperCase()] = v 
    }
    return new_obj
}

// console.log(keysToUpperCase(car))

// 3. 

const arrOfObjectValues = (obj) => {
    return Object.values(obj)
}

// console.log(arrOfObjectValues(car))

// 4. 
const valuesBy2 = (obj) => {
    new_obj = {}
    for ([k,v] of Object.entries(obj)){
        new_obj[k] = v*2 
    }
    return new_obj
}

// console.log(valuesBy2(car));

// 5.
const reveredObj = (obj) => {
    new_obj = {}
    for ([k,v] of Object.entries(obj).reverse()){
        new_obj[k] = v
    }
    return new_obj
}

// console.log(reveredObj(car))

//6.

let nums = {
    a: 3,
    b: 687,
    c: 2020,
    d: 92,
    e: 1
}

const sumOfVals = (obj) => {
    let sum = 0 
    for (v of Object.values(obj)){
        sum += v
    }
    return sum
}

// console.log(sumOfVals(nums));

// 7.
const avgOfVals = (obj) => {
    let sum = 0, count = 0 
    for (v of Object.values(obj)){
        sum += v
        count++
    }
    return sum/count
}

// console.log(avgOfVals(nums))

// 8.
const alpObj = (obj) => {
    new_obj = {}
    for (let k of Object.keys(obj).sort()){
        new_obj[k] = obj[k]
    }
    return new_obj
}

// console.log(alpObj(car))

// 9.
const people = { 
    person1: { name: "John", age: 25 },
    person2: { name: "Mike", age: 32 },
    person3: { name: "Sara", age: 28 },
   };
   
const checkIfPersonExist = (obj,name) => {
    let flag = false
    Object.values(obj).forEach(person => {
        if (person.name.toLowerCase() === name.toLowerCase()){
            flag = true
        }
    })
    return flag
}

// console.log(checkIfPersonExist(people, "Mike"));

// 19.

let words = ["apple", "banana", "orange", "apple", "grape", "orange", "strawberry", "mango", "pear", "kiwi", "pineapple", "lemon", "lime", "watermelon", "cantaloupe", "peach", "plum", "blueberry", "raspberry", "blackberry", "cranberry", "pomegranate", "avocado", "guava", "papaya", "fig", "date", "orange", "apple", "banana", "grape", "kiwi", "mango", "pear", "pineapple", "lemon", "lime", "orange", "apple"];

const wordFrequency = (arrOfStrs) => {
dict = {}
for (wrd of arrOfStrs){
if (Object.keys(dict).includes(wrd.toLowerCase())){
    dict[wrd.toLowerCase()]++
}
else {
    dict[wrd.toLowerCase()] = 1
}
}

return dict
}

console.log(wordFrequency(words))
