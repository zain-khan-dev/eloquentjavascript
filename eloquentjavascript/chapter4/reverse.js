const reverse = (arr) => {
    new_arr = []
    for(let num of arr){
        new_arr.unshift(num)
    }
    return new_arr
}

const reverseArrayInPlace = (arr) => {
    for(let i=0;i<arr.length/2;i++){
        temp = arr[i]
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-1-i] = temp
    }
}

r = [1,2,3,4,5]

console.log(reverse(r))
reverseArrayInPlace(r)