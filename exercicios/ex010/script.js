function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res =  window.document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERROR] Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute("src", "menino.png")
            }else if(idade < 21 ){
                //adolescente
                img.setAttribute("src", "garoto.png")
            }else if(idade < 50){
                //adulto
                img.setAttribute("src", "adulto.png")
            }else{
                //idoso
                img.setAttribute("src", "idoso.png")
        }
        }else if(fsex[1].checked){
            genero = "Mulher"

            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute("src", "menina.png")
            }else if(idade < 20 ){
                //adolescente
                img.setAttribute("src", "garota.png")
            }else if(idade < 50){
                //adulto
                img.setAttribute("src", "adulta.png")
            }else{
                //idoso
                img.setAttribute("src", "idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

