var hora =0 
console.log(`agora são exatamente ${hora} horas.`)
if(hora < 13){
    console.log("Bom dia!!")
}else if (hora <= 18){
    console.log("Boa tarde!!")
}else if (hora >=19){
    console.log("Boa noite")}
    //tentativa falha em fazer que ele leia 00 e 4h como madrugada
// }else if (hora > 0 || hora < 5){
//     console.log("Boa madrugada")
// }