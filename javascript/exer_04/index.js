let mulher1,mulher2,homem1,homem2;
let soma,mult;

mulher1 = Number(prompt("Digite a idade da primeira mulher"));
mulher2 = Number(prompt("Digite a idade da segunda mulher"));
homem1 = Number(prompt("Digite a idade do primeiro homem"));
homem2 = Number(prompt("Digite a idade do segundo homem"));

if(homem1>homem2 && mulher1>mulher2){

    soma=homem1+mulher2;
    
    mult=homem2*mulher1;
    
    }
    
    else if(homem1>homem2 && mulher2>mulher1){
    
    soma=homem1+mulher1;
    
    mult=homem2*mulher2;
    
    }
    
    else if(homem2>homem1 && mulher1>mulher2){
    
    soma=homem2+mulher2;
    
    mult=homem1*mulher1;
    
    }
    
    else{
    
    soma=homem2+mulher1;
    
    mult=homem1*mulher2;
    
    }

    alert(`A soma do homem mais velho com a mulher mais nova é: ${soma} o produto do homem mais novo com a mulher mais velha é: ${mult}`);