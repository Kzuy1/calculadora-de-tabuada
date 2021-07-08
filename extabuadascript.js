function calcular () {
    let num = document.getElementById("txtn")
    let mul = document.getElementById("mul")
    let tab = document.getElementById("seltab")
    
    if (num.value.length == 0){
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(num.value)
        let mult = Number(mul.value)
        let c  = 1
        tab.innerHTML = ""
        while(c <= mult){
            let item =document.createElement("option")  
            item.innerText = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
        tab.size = mult
        
    }


}