function reverseString(str){
    if (str.length <= 1){
        return str;
    }

    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log(reverseString("goodbye")); 
console.log(reverseString("tomorrow")); 
console.log(reverseString("rotator"));
console.log(reverseString("z")); 
console.log(reverseString("")); 

function recursiveFactorial(n) {
    //console.log(`function called for ${n}`);
    if (n ===1) {
        //console.log(n);
        return n;
    }
    //console.log(`Calling function for ${n-1}`);
    let nextValue = n * recursiveFactorial(n-1);
    //console.log(nextValue);
    return nextValue;
}

console.time();
console.log(recursiveFactorial(15));
console.timeEnd();

