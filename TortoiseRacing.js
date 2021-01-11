const race = (v1, v2, g) => {
    // your code
  let hour;
  let minute;
  let second;
  
  if (v1 >= v2) {
    return null
  }
  
  hour = Math.floor(1 / ((v2 - v1) / g))
  minute = Math.floor(((1 / ((v2 - v1) / g)) % 1) * 60)
  second = Math.floor(((((1 / ((v2 - v1) / g)) % 1) * 60) % 1) * 60)
    
  return [hour, minute, second]  
}





console.log(race(720, 850, 70)) // [0, 32, 18]
console.log(race(80, 91, 37)) // [3, 21, 49]
console.log(race(80, 100, 40)) // [2, 0, 0]