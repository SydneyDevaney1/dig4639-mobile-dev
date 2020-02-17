//Produce the sum of the two parameters
/**
*The two parameters must be numbers, otherwise return undefined
*@param a The first number 
*@param b The second number
*/
export function Sum (a, b) {
  if(typeof a == 'number' && typeof b == 'number')
    return (a + b);
   else
    return undefined; 
}

export function AddList(list){
  var result = o;
  //for (var mem of list){

  //}
  for(var i = 0; i < list.length; i++){
    result = result + list [i];
  }
  return result;
  
}



let op1 = "Ten";
let op2 = 2;
let result = Sum(op1, op2);
if (result==op1+op2){
  console.log("IT WORKED");
} else {
  console.log("Expected " + op1+op2 + ", but got " + result);
}
