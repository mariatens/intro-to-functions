
/*
if NUM_ONE is equal to NUM_TWO
return True
else
return False
*/

function isEqual(numOne, numTwo){
    if (numOne === numTwo){
        return true
    }   
    else {
        return false
    }
}


// test cases
console.log(isEqual(4, 4), "should be True")
console.log(isEqual(0, 0), "should be True")
console.log(isEqual(-4, -4), "should be True")
console.log(isEqual(4, -4), "should be False")
console.log(isEqual(0, 1), "should be False")
