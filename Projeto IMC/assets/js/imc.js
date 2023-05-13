function myFunction() {
    var Vnome = document.getElementById("Nome").value
    var Vsnome = document.getElementById("SobreNome").value
    var Vpeso = document.getElementById("Peso").value
    Vpeso = Vpeso.replace(",", ".")
    var Valtura = document.getElementById("Altura").value
    Valtura = Valtura.replace(",", ".")
    var IMC = Vpeso / (Valtura * Valtura)
    IMC = IMC.toFixed(2)

    document.getElementById("mostra").innerHTML = Vnome + " " + Vsnome + " seu IMC é " + IMC.replace(".", ",")
}