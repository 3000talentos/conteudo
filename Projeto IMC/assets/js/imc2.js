function imc() {
    var Vgenero = parseInt(document.getElementById("Sexo").value)
    var Vnome = document.getElementById("Nome").value
    var Vpeso = document.getElementById("Peso").value
    Vpeso = Vpeso.replace(",", ".")
    var Valtura = document.getElementById("Altura").value
    Valtura = Valtura.replace(",", ".")
    var IMC = Vpeso / (Valtura * Valtura)
    IMC = IMC.toFixed(2)

    switch (Vgenero) {
        default:
            document.getElementById("mostra").innerHTML =  "Escolha um genêro"
            break;
        case 1:

            document.getElementById("mostra").innerHTML =  "Masculino"

            break;
        case 2:
            
            document.getElementById("mostra").innerHTML =  "Olá " + Vnome + "! Seu IMC é " + IMC
    }
    
}