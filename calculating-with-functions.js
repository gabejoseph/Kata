const zero = (x) => {
    if (x) {
        return x(0)
    } else return 0
}
const one = (x) => {
    if (x) {
        return x(1)
    } else return 1
}
const two = (x) => {
    if (x) {
        return x(2)
    } else return 2
}
const three = (x) => {
    if (x) {
        return x(3)
    } else return 3
}
const four = (x) => {
    if (x) {
        return x(4)
    } else return 4
}
const five = (x) => {
    if (x) {
        return x(5)
    } else return 5
}
const six = (x) => {
    if (x) {
        return x(6)
    } else return 6
}
const seven = (x) => {
    if (x) {
        return x(7)
    } else return 7
}
const eight = (x) => {
    if (x) {
        return x(8)
    } else return 8
}
const nine = (x) => {
    console.log(x)
    // if (x) {
    //     return x(9)
    // } else return 9
}

const plus = (x) => {
    return x
}
const minus = () => {}
const times = () => {}
const dividedBy = () => {}

console.log(seven(times(five()))); // 35
console.log(four(plus(nine())));  // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two())));  // 3