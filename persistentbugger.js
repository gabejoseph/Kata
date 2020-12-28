const persistence = (num) => {
    let counter = 0   
    num = num.toString().split("")
    console.log(num)
    while (num.length > 1) {
        num = num.reduce((acc, curr) => 
            acc * curr 
        )
        counter++
        num = num.toString().split("")
    }
    return counter
}

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(999)) // 4
