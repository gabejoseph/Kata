const sumDigPow = (a, b) => {
    // Your code here
  let list = [];
  for (var i = a; i <= b; i++) {
    list.push(list);
  }
  for (let l of list) {
    l = l.toString().split('')
  }
  console.log(list)
  
  for (let i = 0; i < list.length; i++) {
    
    if (list[i] === []) {
      
    }
  }
  
}
  

console.log(sumDigPow(1, 10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100)) //  [89]
console.log(sumDigPow(90, 100)) // []
console.log(sumDigPow(90, 150)) // [135]
console.log(sumDigPow(50, 150)) // [89, 135]
console.log(sumDigPow(10, 150)) // [89, 135]