function media() {
    var Aluno = document.getElementById("NomeAluno").value
    var nota1 = document.getElementById("Nota1").value
    nota1 = nota1.replace(",", ".")
    nota1 = parseFloat(nota1, 2)
    var nota2 = document.getElementById("Nota2").value
    nota2 = nota2.replace(",", ".")
    nota2 = parseFloat(nota2, 2)
    var nota3 = document.getElementById("Nota3").value
    nota3 = nota3.replace(",", ".")
    nota3 = parseFloat(nota3, 2)
    var nota4 = document.getElementById("Nota4").value    
    nota4 = nota4.replace(",", ".")
    nota4 = parseFloat(nota4, 2)

    
    var media = (nota1 + nota2 + nota3 + nota4) / 4
    media = media.toFixed(2)

    if (media < 3) {
        resultado = "REPROVADO";
      } else if (media <= 5) {
        resultado = "RECUPERAÇÃO";
      } else {
        resultado = "APROVADO";
      }

      document.getElementById("mostra").innerHTML = "A média do aluno " + Aluno + " é " + media.replace(".", ",") + " e ele está " + resultado
}