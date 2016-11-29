
var name = "Micahel Jackson"

function showCelebrityName() {
  console.log(name)
}

function showOrdinaryPersonName() {
  name = "John"
  console.log(name);
}

function showOrdinaryPersonName() {
  var name = "John"
  //console.log(this.name); // undefined.. Why ??
  console.log(name);
}

showCelebrityName() // Micahel Jackson

showOrdinaryPersonName() // John

showCelebrityName() // John
