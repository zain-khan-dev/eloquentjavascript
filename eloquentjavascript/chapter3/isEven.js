const isEven = (num) => {
    if(num == 0){
        return true;
    }
    else
    if(num == 1){
        return false;
    }
    else{
        return isEven(num - 2);
    }
}


console.log(isEven(10))
console.log(isEven(11))
console.log(isEven(121))