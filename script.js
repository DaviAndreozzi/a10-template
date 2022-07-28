let arrayString = ["banana", "mamão", "amora"]
let arrayNumber = [8, 2, 5]
let arraySortido =["bananinha", 12, true]
let arrayNum = [20]
let arrayVazio = []


const tamArray = arrayString.length
// console.log(arrayString.length)
// console.log(tamArray)
// console.log(arrayString[2])
// console.log(arrayString)

// console.log(arraySortido.includes(true))
// console.log(arraySortido.includes(12))
// console.log(arraySortido.includes(10))
// console.log(arraySortido.includes("Bananinha"))

// console.log(arrayNum)
// console.log(arrayVazio.length)

// let copiaArrayString = arrayString
// console.log(copiaArrayString)

// copiaArrayString.push("uva")
// console.log(copiaArrayString)
// console.log(arrayString)
// slice faz a copia em um so lugar


let copiaArrayString = arrayString.slice()
console.log(copiaArrayString)

copiaArrayString.push("uva")
console.log("copia",copiaArrayString)
console.log("original", arrayString)

// copiaArrayString.pop()
// console.log(copiaArrayString)

copiaArrayString.splice(2, 2)
console.log(copiaArrayString)

// let ar = ["a", "b", "c", "d", "e"]
// console.log(ar)
// ar.splice(2, 2)
// console.log(ar)

// arrayNumber.sort()
// arrayString.sort()
// console.log(arrayString)
// console.log(arrayNumber)

let array = [1, 5, 9, 8, 7, 5, 3, 2, 6, 4]
array.sort()
console.log(array)
array.reverse()
console.log(array)

array.pop()
console.log(array)
array.push(100)
console.log(array)
array.splice(1, 1)
console.log(array)

