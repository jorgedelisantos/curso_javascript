let valores = [9, 6, 8 , 7, 3, 2, 1, 4, 5,] 
console.log(valores) // forma convencional
/*
// desta forma não inteligente
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])
console.log(valores[8])
console.log(valores[9])

// Forma mais apropriado, mais inteligente

for( var pos = 0 ; pos < valores.length; pos ++){
console.log(`A posição ${pos} tem o valor ${valores[pos]} declarado`)
}*/
for( var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]} declarado`)// forma mais simplificada e sábia!!!!
}
