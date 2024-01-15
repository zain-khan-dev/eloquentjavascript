
const less = (idx1, idx2) => idx1 <= idx2

const more = (idx1, idx2) => idx1 >= idx2

const range = (start, end, step=1) => {
    arr = [];
    func_to_compare = step > 0?less:more
    console.log(func_to_compare)
    for(let i=start;func_to_compare(i, end);i+=step){
        arr.push(i);
    }
    return arr;
};


const sum = (arr) => {
    result = 0;
    for(let i=0;i<arr.length;i++){
        result += arr[i];
    }
    return result;
};

arr = range(1, 100, 1)
console.log(arr)
console.log(sum(arr));