function fizzBuzz(num){
  
  if(num%3==0 && num%5===0){
    return 'fizzbuzz';
  } else  if (num%5===0){
    return 'buzz';
  } else if(num%3===0) {
    return 'fizz';
  } else { 
    return num;
  }
}
// console.log(createFizzBuzz(2));
function createFizzBuzz(length){
  let arr = [];
  for(let i =1;i<=length;i++){
    arr.push(fizzBuzz(i));
  }
  return arr;
}
const toMapOver = createFizzBuzz(15);
console.log(toMapOver)
toMapOver.map(event)
//map()
//parseInt()
//
