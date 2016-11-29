
var string1 = "abaa"
var string2 = "b"

var array = string1.concat(string2).split('')

var obj = array.reduce( function (acc,curr) {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
} , {})

 console.log(array);
 //console.log(obj);


 // var obj = { }
 // obj[0] = 1
 // console.log(obj[0]);
 // console.log(obj);
