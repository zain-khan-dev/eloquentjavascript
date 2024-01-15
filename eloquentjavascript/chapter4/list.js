const arrayToList = (new_arr) => {
    let result = {}
    let head = result
    for(let num of new_arr){
        result.value = num
        result.rest = {}
        result = result.rest
    }
    return head
}

const listToArray = (list) => {
    let result = []
    while(list){
        if(list.value != null){
            result.push(list.value)
        }
        list = list.rest
    }
    return result
}

const prepend = (element, list) => {
    let new_arr = listToArray(list)
    new_arr.unshift(element)
    return arrayToList(new_arr)
}


const nth = (list, pos) => {
    while(pos && list){
        list = list.rest
        pos -= 1
    }
    return list.value
}


function nthRecursive(list, pos) {
    if(pos == 0){
        return list.value
    }
    return nthRecursive(list.rest, pos-1)
}


arr = arrayToList([1,2,3,4,5])

let another_arr = (prepend(10, arr))

console.log(nth(arr, 1))
console.log(nth(another_arr, 0))
console.log(nthRecursive(another_arr, 5))