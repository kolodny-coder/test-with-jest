// function divide(number, diviedBy) {
//   let result = 0
//   const loopTime = number;
//   for (let iteration = 1; iteration < loopTime; iteration++) {
//     const result = diviedBy * iteration
//     if (result >= number) {
//       return iteration
//     }
    
//   }}

function divide (number, diviedBy) {
  let tempResult = 0
  let iteration = 1
  if (number === Infinity && diviedBy === Infinity) {
    return NaN
  }
  if (number === Infinity && diviedBy >= 0){
    return Infinity
  } else if (number === Infinity) {return -Infinity}
  else if (number === 0  && diviedBy === 0 )
    {return NaN} else if(diviedBy === 0 && number < 0) { return -Infinity}
    else if (diviedBy === 0) { return Infinity}
  while(number > tempResult) {
    

    tempResult = iteration * diviedBy
    iteration++;
  }
  return iteration - 1
}

// function iterativeFunction (number, diviedBy) {
  
//   let start=0, end=number;
       
//   // Iterate while start not meets end
//   while (start<=end){

//       // Find the mid number
//       let mid=Math.floor((start + end)/2);

//       // If mid number multiply the divider equaly the number, return True
//       if (mid * diviedBy === number) {
//          return mid
//         }

//       // Else look in left or right half accordingly
//       else if (mid * diviedBy < number)
//            start = mid + 1;
//       else
//            end = mid - 1;
//   }

//   return 'no exact match';
// }



// Driver code
// let arr = [1, 3, 5, 7, 8, 9];
// let x = 5;

// if (iterativeFunction(arr, x, 0, arr.length-1))
//   document.write("Element found!<br>");
// else document.write("Element not found!<br>");

// x = 6;

// if (iterativeFunction(arr, x, 0, arr.length-1))
//   document.write("Element found!<br>");
// else document.write("Element not found!<br>");
                                 

  
  module.exports = divide


  