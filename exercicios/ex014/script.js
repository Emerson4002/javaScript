 function tabuada(){
     let num = document.getElementById("txtn")
     let tab = document.getElementById("seltab")
     if(num.value.length == 0){        
        window.alert = ("Por favor, digite um numero!")
     }else{
         let n = Number(num.value)
         let c = 1
         //isso é meio que uma gambiarra para limpara a area que a tabuada vai ficar
         //caso contrario ele vai acumulando uma abaixo da outra
         tab.innerHTML = ""
         while( c <= 20){
             let item =  document.createElement('option')
             item.text = `${n} x ${c} = ${n*c}`             //serve para colocar valor (value ) no option
             item.value = `tab${c}`
             tab.appendChild(item)
             c++

         } 
     }
     
    




}