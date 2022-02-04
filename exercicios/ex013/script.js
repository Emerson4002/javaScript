
function conta(){
    var nI = document.getElementById("nInicio")
    var nF = document.getElementById("nFim")
    var nP = document.getElementById("nPassos")
    var res = document.getElementById("res")

    if(nI.value.length == 0 || nF.value.length == 0 || nP.value.length == 0){
        res.innerHTML = alert("[ERROR] está faltando algum dado.")
    }else{
        res.innerHTML = "Contando: <br>"
        //agora vamos criar e chamar as variaveis i,f e p
        let i = Number(nI.value)
        let f = Number(nF.value)
        let p = Number(nP.value)
        if(p <= 0){
            window.alert("Passo invalido! Considerando Passo 1")
            p = 1
        }
        //agora iremos criar o laço de repetição
        if(i < f){
            //contagem crescente
         for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F603}` 
        }   
        }else {
            //contagem decrescente
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1f603}`
            }
        }
        
        
    }
}

