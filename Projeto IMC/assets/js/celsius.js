function myFunction() {

    var VCelsius = document.getElementById("Celsius").value
    VCelsius.replace(",", ".")
    
    var Fahrenheit = VCelsius * (9/5) + 32
    Fahrenheit.toFixed(2)

    document.getElementById("mostra").innerHTML = Fahrenheit
}