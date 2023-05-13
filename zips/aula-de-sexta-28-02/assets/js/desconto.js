function myFunction() {

    var Vvalor = document.getElementById("Valor").value
    Vvalor = Vvalor.replace(",", ".")
    var Vdesconto = document.getElementById("Desconto").value
    Vdesconto = Vdesconto.replace("%", "")
    Vdesconto = Vdesconto.replace(",", ".")
    
    var Porcentagem = Vdesconto / 100
    var Calculo = Vvalor * Porcentagem
    var Resultado = parseFloat(Vvalor) - parseFloat(Calculo)

    Resultado.toFixed(2)

    document.getElementById("mostra").innerHTML = Resultado

}