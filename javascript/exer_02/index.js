

let salario = null;
let calculo = null;

let botao = document.getElementById("botao")


botao.addEventListener('click', function(){

    let num_de_horas_mes = document.getElementById("horas").value;
    let salario_hora = document.getElementById("salario").value;

    if(num_de_horas_mes/4 >= 40){
        calculo = (salario_hora  * num_de_horas_mes) * (50/100) ;
        salario = (salario_hora* num_de_horas_mes) + calculo;
        salario_formatado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    else if(num_de_horas_mes/4 < 40){
        salario = salario_hora* num_de_horas_mes;
        salario_formatado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
    document.getElementById("mostrar").innerHTML = salario_formatado;

});





// function SalarioTotal(salario, horasTrabalhadasNoMes) {

//     const salarioHora = (salario / horasTrabalhadasNoMes); 
  
//     return Math.round(salarioHora);
  
//   }
