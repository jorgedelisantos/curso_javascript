function parimp (numero){
if (numero % 2 == 0){
    return "par"
}else{
    return 'impar'
}
}

///////////////////////////////////////////////////

var resultado = parimp (50)// uma forma mais
console.log (resultado)    // completa
console.log(parimp(77)) // forma mais simplificada

///////////////////////////////////////////////////

var atleta  = function (exercicio){ 
     return exercicio * 1   //funções Arrow ==> 
}
console.log(atleta(2))

///////////////////////////////////////////////////

function factorial (numero){
    let factorial = 1 
    for (let contador = numero; contador > 1; contador --){
            factorial *= contador
    }
         return factorial // Fatoração de um numero
                          // Ex : nº 7
    }                     // 7*6*5*4*3*2*1 = 5040
    console.log (factorial(7))
    
