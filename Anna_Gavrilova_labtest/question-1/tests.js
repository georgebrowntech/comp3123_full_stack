var calc=require('./calculator')
var should =require('should')


describe('Calculator',function(){
    describe('When multiplying two numbers',function(){
        it('should multiply two numbers correctly 4*4=16',function(){
            calc.multiplyTwoNumbers(4,4).should.equal(16)
        });
        it('should multiply two numbers correctly 2*5=10',function(){
            calc.multiplyTwoNumbers(2,5).should.equal(10)
        })
        it('multiply two numbers should not equal 2*2=5',function(){
            calc.multiplyTwoNumbers(2,2).should.not.equal(5)
        })
        it('should throw an error = "x" *"y" ',function(){
            calc.multiplyTwoNumbers(4,4)
        })
    })
})

describe('Calculator',function(){
    describe('even doubler',function(){
        it('even double when even 2=4',function(){
            calc.evenDoubler(2).should.equal(4)
        });
        it('should not doublehen odd 3 = 9',function(){
            calc.evenDoubler(3).should.not.equal(9)
        });
        it('should equal zero when odd 9=>0',function(){
            calc.evenDoubler(9).should.equal(0)
        });
    })
})