var idade = 17
console.log(`voce tem ${idade} anos`)
if(idade < 16){
    console.log("não vota")
    //else if é uma forma de simplificar em um bloco 
}else if(idade < 18 || idade > 65){
        console.log("voto opcional")
        }else{
            console.log("voto obrigatorio")
        }
