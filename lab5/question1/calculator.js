const multiplyTwoNumbers = (a, b) => {
    if(Number.isInteger(a) && Number.isInteger(b)) {
        return a * b
    } else {
        throw new Error(`${a} * ${b}`)
    }
}

const evenDoubler = (x) => {
    if(!Number.isInteger(x)) {
        throw new Error(`${x}`)
    }
    else if(x % 2 == 0) {
        return x * x
    } else {
        return 0
    }
}

module.exports = {
    multiplyTwoNumbers,
    evenDoubler
}