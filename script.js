function sumar(numero1 = 0, numero2= 0) {    
    return numero1 + numero2
}

let numero1, numero2
do{
    numero1 =parseFloat(prompt("Ingrese un numero"))
    numero2 =parseFloat(prompt("Ingrese un numero"))
} while(isNaN(numero1)  || isNaN(numero2))

let resultado = sumar(numero1, numero2)
console.log(resultado)


