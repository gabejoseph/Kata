const isValidWalk = (walk) => {
    //insert brilliant code here
    console.log(walk)
  
    let counterA = 0;
    let counterB = 0;
    if (walk.length !== 10) {
      return false
    }
    
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') {
          counterA++      
        } else if (walk[i] === 's') {
          counterA--
        } else if (walk[i] === 'e') {
          counterB++
        } else if (walk[i] === 'w') {
          counterB--
        }
    }
    
    return (counterA === 0 && counterB === 0) ? true : false
}





//some test cases for you...
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //  'should return true'
console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // 'should return false'
console.log(!isValidWalk(['w'])) // 'should return false'
console.log(!isValidWalk(['n','n','n','s','n','s','n','s','n','s'])) // 'should return false'