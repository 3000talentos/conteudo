function myFunction() {

    var VKmPercorrer = document.getElementById("KmPercorrer").value
    VKmPercorrer = VKmPercorrer.replace(",", ".")

    var VKmLitros = document.getElementById("KmLitros").value    
    VKmLitros = VKmLitros.replace(",", ".")

    var VvlrLitro = document.getElementById("VlrLitro").value    
    VvlrLitro = VvlrLitro.replace(",", ".")

    
    /* calculo */
    var Calculo = VKmPercorrer / VKmLitros
    var Resultado = Calculo * VvlrLitro

    Resultado = Resultado.toFixed(2)

    document.getElementById("mostra").innerHTML = "R$ " + Resultado
}