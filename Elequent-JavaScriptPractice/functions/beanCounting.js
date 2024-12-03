/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
*/

function countBs(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === 'B'){
            count ++;
        }
    }
    return count;
}

console.log(countBs('Band Boys are Bad'));