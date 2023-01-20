

let num = [9, 6, 8 , 7] 
num.push(5)// adicionei um vetor
num.sort() // pus em ordem crescente
console.log(num) // mostra todo o vetor
console.log(`o vetor tem ${num.length} posições`)
console.log(num[1]) //qual o indice do vetor

let pos = num.indexOf(4)
if(pos == -1){
    console.log('o numero não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}