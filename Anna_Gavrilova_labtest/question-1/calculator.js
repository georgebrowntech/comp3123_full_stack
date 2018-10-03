function multiplyTwoNumbers(x,y){

    if(Number.isInteger(x)&&Number.isInteger(y)){
        return x*y
    }
    else throw "Either X or Y is not an integer!"

}

function evenDoubler(x){

   
    
    if(Number.isInteger(x)){
        if(x%2!=0)
        return 0;
        
        return x*x
    }
    else throw "X is not an integer!"

}

module.exports={
    multiplyTwoNumbers:multiplyTwoNumbers,
    evenDoubler:evenDoubler
}