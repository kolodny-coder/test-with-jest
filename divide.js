function divide(number, diviedBy) {
  let result = 0
  const loopTime = number;
  for (let iteration = 1; iteration < loopTime; iteration++) {
    const result = diviedBy * iteration
    if (result >= number) {
      return iteration
    }
    
  }

  }
  module.exports = divide;