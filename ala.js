

function somase() {

f1 = document.querySelector("input#fatura1")
f2 = document.querySelector("input#fatura2")
f3 = document.querySelector("input#fatura3")
f4 = document.querySelector("input#fatura4")
f5 = document.querySelector("input#fatura5")
resoma = document.querySelector("div#resultadosoma")

f1_1 = (f1.value)
f2_1 = (f2.value)
f3_1 = (f3.value)
f4_1 = (f4.value)
f5_1 = (f5.value)

somafatura =  parseFloat(f1_1) + parseFloat(f2_1) + parseFloat(f3_1) + parseFloat(f4_1) + parseFloat(f5_1)



    resoma.innerHTML = `Toltal das faturas vencidas = ${somafatura}`

}

function descontose() {

    des = document.querySelector("input#desconto")
    resdesconto =  document.querySelector("div#resultadodesconto")
    desc = (des.value)

    if (desc == 15 ) {

        resd15 = (somafatura) - (somafatura * 15) / 100
        resdesconto.innerHTML =  ` 15% de desconto = ${resd15.toFixed(2)}`

    } else if (desc == 50) {

        resd50 = (somafatura) - (somafatura * 50) / 100
        resdesconto.innerHTML =  `50% de desconto = ${resd50.toFixed(2)}`
    }

    else if (desc == 70) {
        
        resd70 = (somafatura) - (somafatura * 70) / 100
        resdesconto.innerHTML =  `70% de desconto = ${resd70.toFixed(2)}`
        
    }

    else if ( desc == 80 ) {

        resd80 = (somafatura) - (somafatura * 80) / 100
        resdesconto.innerHTML =  `80% de desconto = ${resd80.toFixed(2)}`

        
    }

    else if ( desc == 90 ) {

        resd90 = (somafatura) - (somafatura * 90) / 100
        resdesconto.innerHTML =  `90% de desconto = ${resd90.toFixed(2)}`

        
    } else {alert("digite 15, 50, 70, 80 ou 90")}



}


function parcelase() {

    parc = document.querySelector("input#parcela")
    resparcela =  document.querySelector("div#resultadoparcela")
    parcla = (parc.value)

    if (parcla == 1 ) {

        parcla1 = somafatura
        resparcela.innerHTML =  `${parcla1.toFixed(2)}`

    } else if (parcla == 2 ) {

        parcla2 = somafatura / 2
        resparcela.innerHTML =  
        `Entrada: ${parcla2.toFixed(2)}
        Parcela 1: ${(parcla2/2).toFixed(2)}
        Parcela 2: ${(parcla2/2).toFixed(2)}`
        

    }

    else if (parcla == 3 ) {

        parcla3 = somafatura / 2
        resparcela.innerHTML =  
        `Entrada: ${parcla3.toFixed(2)}
        Parcela 1: ${(parcla3/3).toFixed(2)}
        Parcela 2: ${(parcla3/3).toFixed(2)}
        Parcela 3: ${(parcla3/3).toFixed(2)}`
        

    } else if (parcla == 4 ) {

        parcla4 = somafatura / 2
        resparcela.innerHTML =  
        `Entrada: ${parcla4.toFixed(2)}
        Parcela 1: ${(parcla4/4).toFixed(2)}
        Parcela 2: ${(parcla4/4).toFixed(2)}
        Parcela 3: ${(parcla4/4).toFixed(2)}
        Parcela 4: ${(parcla4/4).toFixed(2)}`
        

    } else if (parcla == 5 ) {

        parcla5 = somafatura / 2
        resparcela.innerHTML =  
        `Entrada: ${parcla5.toFixed(2)}
        Parcela 1: ${(parcla5/5).toFixed(2)}
        Parcela 2: ${(parcla5/5).toFixed(2)}
        Parcela 3: ${(parcla5/5).toFixed(2)}
        Parcela 4: ${(parcla5/5).toFixed(2)}
        Parcela 5: ${(parcla5/5).toFixed(2)}`
        

    } else if (parcla == 6 ) {

        parcla6 = somafatura / 2
        resparcela.innerHTML =  
        `Entrada: ${parcla6.toFixed(2)}
        Parcela 1: ${(parcla6/6).toFixed(2)}
        Parcela 2: ${(parcla6/6).toFixed(2)}
        Parcela 3: ${(parcla6/6).toFixed(2)}
        Parcela 4: ${(parcla6/6).toFixed(2)}
        Parcela 5: ${(parcla6/6).toFixed(2)}
        Parcela 6: ${(parcla6/6).toFixed(2)}`
        
    } else {alert("digite 1, 2, 3, 4, 5 ou 6")}
    



}
