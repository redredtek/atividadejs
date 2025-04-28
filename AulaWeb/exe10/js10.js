
var numero1 = parseFloat(prompt("Insira o primeiro numero"))
var numero2 = parseFloat(prompt("insira o segundo numero"))
var operação = prompt("qual operação que executar(+,-,/,*)")
var operado
if(operação == "+"){ operado = numero1+numero2
    document.getElementById('a1').innerHTML = "A soma é " + operado;
}else if(operação == "-"){operado = numero1-numero2
    document.getElementById('a1').innerHTML = "A subtração é " + operado;
}else if(operação == "*"){operado = numero1*numero2
    document.getElementById('a1').innerHTML = "A multiplicação é " + operado;
}else if(operação == "/"){operado = numero1/numero2
    document.getElementById('a1').innerHTML = "A divisão é " + operado;
}else{document.getElementById('a1').innerHTML = "lé o prompt o burro";}

    
    
