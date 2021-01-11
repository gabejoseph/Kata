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

// Two more elegant answers 

// function race(v1, v2, g) {
//     if (v2 < v1) { return null; }
    
//     var seconds = Math.floor(g / (v2 - v1) * 3600);
//     var h = Math.floor(seconds / 3600);
//     var m = Math.floor((seconds - h * 3600) / 60);
//     var s = seconds - h * 3600 - m * 60;
    
//     return [h, m, s];
// }

// function race(v1, v2, g){
//     let time=g/(v2-v1);
//     return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
// }