let num = [5,8,2,9,1,3]
num.push(6)
num.sort()
console.log(`o vetor tem ${num.length} posições`)
console.log(`tem os seguintes numeros: ${num}`)
console.log(`em ordem crescente: ${num.sort()}`)
//indexOf serve para buscar um valor dentro do array
let pos = num.indexOf(0)
if(pos == -1){
    console.log("o valor não foi encontrado!")
}else{
    console.log(`o valor está na posição ${pos}`)
}