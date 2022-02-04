let valores = [1,5,6,7,8,3,9,7,5]
//forma padrão de mostrar na tela
//console.log(valores)

//jeito errado
/*
console.log([0])
console.log([1])
console.log([2])
console.log([3])
console.log([4])
console.log([5])
console.log([6])
console.log([7])
*/
//jeito certo de personalizar o formato de saida
/*for(let pos = 0; pos < valores.length; pos++){
    //console.log(valores[pos])
    console.log(`o valor da posição ${pos} é o numero ${valores[pos]}`)
}
*/
//de uma forma mais simples e especifica para arrays e objects
for(let pos in valores){
    console.log(`o valor da posição ${pos} é igual a ${valores[pos]}`)
}    

