let numero_conta = prompt("Numero da conta");
let saldo = prompt("Saldo da conta");
let debito = prompt("Debito da conta");
let credito = prompt("Credito da conta");
let saldo_atual = null;

saldo_atual = Number(saldo) - Number(debito) + Number(credito);

alert(saldo_atual);

if(saldo_atual >= 0){
    alert("Saldo Positivo");
}
else if(saldo_atual < 0){
    alert("Saldo Negativo");
}