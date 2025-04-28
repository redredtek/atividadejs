nota1 = parseFloat(prompt("Informe a 1° nota"));
nota2 = parseFloat(prompt("Informe a 2° nota"));
nota3 = parseFloat(prompt("Informe a 3° nota"));
media = (nota1 + nota2 + nota3) / 3;
document.getElementById('mensagem').innerHTML = `Sua média foi de ${media} pontos`;