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

