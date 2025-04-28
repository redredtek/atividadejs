peso = parseFloat(prompt("Informe o peso em Kg"));
altura = parseFloat(prompt("Informe a altura em metros"));
imc= (peso / (altura*2)).toFixed(1);
document.getElementById('mensagem').innerHTML = `Seu IMC é ${imc}(Considerando peso ${peso}Kg e altura ${altura}m)`;