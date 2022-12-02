
let botao = document.getElementById("butao");
botao.addEventListener('click' ,resultado);

function resultado(){ 

    let soma,mult;
    let mulher1 = Number(document.getElementById("mulher1").value);
    let mulher2 = Number(document.getElementById("mulher2").value);
    let homem1 = Number(document.getElementById("homem1").value);
    let homem2 = Number(document.getElementById("homem2").value);

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

    document.getElementById("soma").innerHTML = "a soma das idades do homem"
   + "mais velho com a mulher mais nova e: " + soma;
    document.getElementById("mult").innerHTML = "o produto das idades do homem mais novo"
    + "com a mulher mais velha e: " + mult;

}