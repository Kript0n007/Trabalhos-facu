let nome_produto = prompt("Digite o nome do produto");
let quantidade= Number(prompt("Digite a quantidade"));
let preço = Number(prompt("Digite o preço unitario"));
let total,total_pagar,desconto;

total = quantidade * preço;

if(quantidade <= 5){
    desconto = total * (2/100); 
    total_pagar = total - desconto;
}
else if(quantidade >5 && quantidade<=10){
    desconto = total * (3/100);
    total_pagar = total - desconto;
}
else if(quantidade > 10){
    desconto = total * (5/100);
    total_pagar = total - desconto;
}

alert(total_pagar); 