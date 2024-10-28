// Quetion:

// Zero is  even

// One  is odd

// for any other number N, its evenness is the same as N-2

//  Define a recursivev function isEven corressponsing to this decription. The function  should accept a single parameter (a positive, whole  number) and return a Boolean.

// Text it on 50  and 75. see how it behaves on -1. Why? can you think of a wway to fix this?

/**
 * Determines if a given number is  even using recursion
 * 
 * - Base cases:
 * - Zero is even, so `isEven(0)` returns true
 * - One is odd,  so `isEven(1)` returns false
 * - Fro any other positive whole number `N`,  its evennes is the smae as `isEven(N-2)`
 * - If the number is negative, the function currently returns `-1` as an error indicator
 * 
 * @param {number} num - A positive whole number to  checkk for evenness
 * @returns {boolean/number}- Returns, `true` if the  number is even, `false` if it's not and `-1` if the input is negative
 */

function isEven(num){
    if (num < 0) return  -1;
    if (num === 0) return true;
    if (num === 1) return false;
    else {
        return isEven(num - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

