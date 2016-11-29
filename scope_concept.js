
var name = "Richard"

function showName() {

   var name = "Jack" // Local variable; only accessible in this showName function
  console.log(name) //Jack

}
showName()
console.log(name) //Richard : the global variable
