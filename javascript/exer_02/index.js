
let num_de_horas_mes = prompt("Numero de horas trabalhadas no mes");
let salario_hora = prompt("Digite seu salario por hora");
let salario = null;
let calculo = null;

if(num_de_horas_mes/4 >= 40){
    calculo = (salario_hora  * num_de_horas_mes) * (50/100) ;
    salario = (salario_hora* num_de_horas_mes) + calculo;
    salario_formatado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
else if(num_de_horas_mes/4 < 40){
    salario = salario_hora* num_de_horas_mes;
    salario_formatado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

alert(salario_formatado);

// function SalarioTotal(salario, horasTrabalhadasNoMes) {

//     const salarioHora = (salario / horasTrabalhadasNoMes); 
  
//     return Math.round(salarioHora);
  
//   }

//