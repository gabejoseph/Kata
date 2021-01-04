const titleCase = (title, minorWords) => {
  
    if (minorWords) {
      minorWords = minorWords.split(" ")
    }
    if (title !== '') {
        title = title.toLowerCase().split(" ")
    }
  
    for (let i = 0; i < title.length; i++) {
      if (i !== 0 && minorWords && !minorWords.includes(title[i])) {
        // Words that are going to be capitalized
        let first = title[0].split("")
        title[0] = [first[0].toUpperCase(), ...rest]
        
      }
    }
    return title
  }



console.log(titleCase('')) // ''
console.log(titleCase('a clash of KINGS', 'a an the of')) // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')) // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')) // 'The Quick Brown Fox'

