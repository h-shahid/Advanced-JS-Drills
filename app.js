
name = "Hafeeza"
var name

setName()
function setName() {
var name = "Hafeeza"
console.log(name)

 console.log('Average')
let avg = findAvg(6, 4)
console.log('Average', avg)

function findAvg (a, b) {
console.log('Average')
 var answer = (a + b) / 2
return answer
 }
}

let fruits = ['apples', 'bananas', 'pineapple']
//let favFruit
let leastFav = 'bananas'
function printFruits() {
    let favFruit = fruits[0]
    console.log(fruits[0])
    printFavFruit()
  
    function printFavFruit() {
    console.log(favFruit)
    
   }
}

printFruits()
console.log(leastFav)

let hiThere = function() {
    alert("Hola amigos!")
} 
hiThere()