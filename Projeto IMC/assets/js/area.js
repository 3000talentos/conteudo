function myFunction() {
    var Vlargura = document.getElementById("Largura").value
    Vvalor = Vvalor.replace(",", ".")
    var Vdesconto = document.getElementById("Desconto").value
    Vdesconto = Vdesconto.replace("%", "")
    Vdesconto = Vdesconto.replace(",", ".")
    /* comentário */
    var Porcentagem = Vdesconto / 100
    var Calculo = Vvalor * Porcentagem
    var Resultado = Vvalor - Calculo

    Resultado.toFixed(2)

    document.getElementById("mostra").innerHTML = Resultado
}