const compareArrays = (arr1, arr2) => {
    if(arr1.length != arr2.length){
        return false
    }
    for(let num of arr1){
        if(!arr2.includes(num)){
            return false
        }
    }
    return true
}

const compareTypes = (element1, element2) => {
    return typeof element1 == typeof element2
}


const deepEqual = (obj1, obj2) => {
    keys1 = Object.keys(obj1)
    keys2 = Object.keys(obj2)
    if(!compareArrays(keys1, keys2)){
        console.log("here1")
        return false
    }
    for(let i=0;i<keys1.length;i++){
        key1 = keys1[i]
        key2= keys2[i]
        if(!compareTypes(obj1[key1],  obj2[key2])){
            return false
        }
        if(Array.isArray(obj1[key1])){
            if(!compareArrays(obj1[key1], obj2[key2])){
                return false
            }
        }
        else
        if(typeof(obj1[key1]) == "object"){
            if(!deepEqual(obj1[key1], obj2[key2])){
                return false
            }
        }
        else{
            if(obj1[key1] != obj2[key2]){
                return false
            }
        }
    }
    return true
}


// Your code here.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true