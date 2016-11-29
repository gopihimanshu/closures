
var name = "Richard"

if(name) {

   name = "Jack" // this name is the global variable and it is being changed to "Jack"
  console.log(name) //Jack : still the global variable

}
//Here, the name variable is the same global variable ,  but it was changed in the if statement
console.log(name) //Jack
