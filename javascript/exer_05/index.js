let total,total_pagar,desconto;

let botao = document.getElementById("butao");
botao.addEventListener("click",resultado);


function resultado(){ 
    
    let nome_produto = Number(document.getElementById("nome").value);
    let quantidade= Number(document.getElementById("quantidade").value);
    let preço = Number(document.getElementById("preço").value);

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

total_a_pagar_formatado= total_pagar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

document.getElementById("mostra").innerHTML= total_a_pagar_formatado;

}