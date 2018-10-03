const Calculator = require('./calculator')
const should = require('should')

describe('Calculator', () => {
    it('should multiply two numbers correctly 4 * 4 = 16', () => {
        Calculator.multiplyTwoNumbers(4, 4).should.equal(16)
    })

    it('should multiply two numbers correctly 2 * 5 = 10', () => {
        Calculator.multiplyTwoNumbers(2, 5).should.equal(10)
    })

    it('multiply two numbers should not equal 2 * 2 = 5', () => {
        Calculator.multiplyTwoNumbers(2, 2).should.not.equal(5)
    })

    it('should throw an error = "x" * "y"', () => {
        should(() => Calculator.multiplyTwoNumbers(2.2, 2.3)).throw(Error)
    })
})

describe('Calculator', () => {
    it('even double when even 2 = 4', () => {
        Calculator.evenDoubler(2).should.equal(4)
    })

    it('should not double when odd 3 = 9', () => {
        Calculator.evenDoubler(3).should.not.equal(9)
    })

    it('should equal zero when odd 9 = 0', () => {
        Calculator.evenDoubler(3).should.equal(0)
    })

})


