function sum(num1, num2){
    return num1 + num2
}

function calcular(num1,num2,callb){
    return callb(num1,num2)
}

console.log(calcular(2,4,sum))

