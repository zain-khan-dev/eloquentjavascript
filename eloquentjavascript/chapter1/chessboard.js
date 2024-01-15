const BINDING_SIZE = 9

let result_str = ""
let start = " "
for(let i=0;i<BINDING_SIZE;i++){
    if(i%2 == 0){
        start = " "
    }
    else{
        start = "#"
    }
    for(let j=0;j<BINDING_SIZE;j++){
        result_str += start
        if(start == " "){
            start = "#"
        }
        else{
            start = " "
        }
    }
    result_str += "\n"
}
console.log(result_str.trimEnd())