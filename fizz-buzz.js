function createFizzBuzz(num){
  if(num%3===0){
    return 'fizz';
  } if (num%5===0){
    return 'buzz';
  } if (num%15===0){
    return 'fizzbuzz';
  } else { 
    return ' ';
  }
}
console.log(createFizzBuzz(15));

