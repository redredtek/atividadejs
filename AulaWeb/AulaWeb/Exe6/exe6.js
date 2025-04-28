num = parseInt(prompt("Informe um número inteiro"))
if(num % 2 ==0){
    document.getElementById('mensagem').innerHTML = `O número ${num} é par`;
}else{
    document.getElementById('mensagem').innerHTML = `O número ${num} é impar`;
}