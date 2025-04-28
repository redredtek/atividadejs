celsius = parseFloat(prompt("Informe uma temperatura em celsius: "))
f = ((celsius * 9/5) + 32).toFixed(1);
document.getElementById('mensagem').innerHTML = `${celsius}°C equivalem a ${f}°F`;
