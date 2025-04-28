var numeroP= 0, numeroR, i = 0;
numeroP = parseFloat(prompt("diga um nunmero pa conta"))

if(numeroP >= 0)
    {while(i <= numeroP){
    numeroR=numeroR+" "+i
    
    i++
}
document.getElementById("mensagem").innerHTML = numeroR
    }