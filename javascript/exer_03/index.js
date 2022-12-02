let saldo_atual = 0;


let botao = document.getElementById("calcular");
botao.addEventListener("click",calcula);

function calcula(){
let numero_conta = document.getElementById("conta").value;
let saldo = document.getElementById("saldo").value;
let debito = document.getElementById("debito").value;
let credito = document.getElementById("credito").value;


saldo_atual = Number(saldo) - Number(debito) + Number(credito);

if(saldo_atual >= 0){
    document.getElementById("atual").innerHTML = "Saldo positivo <br>";
}
else if(saldo_atual < 0){
    document.getElementById("atual").innerHTML = "Saldo Negativo <br>";
}

    document.getElementById("mostra").innerHTML = saldo_atual;
}