let userArrayStr = document.getElementById("userArray");

function arraySum(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum +=array[i];
    }
    return sum;
}

function arrayMean(array){
    
    return arraySum(array)/array.length;
}
function printArray(){
    let userArray = Array.from(userArrayStr.value.split(" "), (i) => parseInt(i) );

    alert("Sum: "+arraySum(userArray)+"\n"
        +"Mean: "+arrayMean(userArray));

}  