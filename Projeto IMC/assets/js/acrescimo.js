function myFunction() {
    // cria a variavel Vvalor
    var Vvalor = document.getElementById("Valor").value
    // substitui vírgula por ponto
    Vvalor = Vvalor.replace(",", ".")
    // cria a variavel Vacrescimo
    var Vacrescimo = document.getElementById("Acrescimo").value
    // subtitui o % por nada
    Vacrescimo = Vacrescimo.replace("%", "")
    // substitui vírgula por ponto
    Vacrescimo = Vacrescimo.replace(",", ".")
    /* cria a variavel Porcentagem que é o acrecimo dividido p/ 100 */
    var Porcentagem = Vacrescimo / 100
    // crio a variavel calculo multiplicando
    var Calculo = Vvalor * Porcentagem
    // crio a variavel resultado
    var Resultado = parseFloat(Vvalor) + parseFloat(Calculo)
    // transforma em duas casas decimais
    Resultado.toFixed(2)
    // gera o resultado para mostrar
    document.getElementById("mostra").innerHTML = Resultado
}