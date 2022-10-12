//declaración de función sumar
function sum(num1, num2){
    return num1 + num2
}

//Creación de un callback
function calcular(num1,num2,callb){
    return callb(num1,num2)
}

console.log(calcular(2,4,sum)) //Implementación de un callback

