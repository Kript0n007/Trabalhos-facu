
let votos_brancos = null;
let votos_nulos = null;
let votos_validos = null;
let brancos_porcentual = null;
let total_de_eleitores=null;
let nulos_porcentual=null;
let validos_porcentual=null;


let botao = document.getElementById("calcular");

botao.addEventListener('click', function(){
    votos_brancos = document.getElementById("branco").value;
    votos_nulos = document.getElementById("nulo").value;
    votos_validos = document.getElementById("valido").value;
    total_de_eleitores = document.getElementById("eleitores").value;

    brancos_porcentual = (100/total_de_eleitores)*votos_brancos;
    nulos_porcentual = (100/total_de_eleitores)*votos_nulos;
    validos_porcentual = (100/total_de_eleitores)*votos_validos;

    document.getElementById("votos_b").innerHTML = "votos em brancos: " + brancos_porcentual+"%";
    document.getElementById("votos_v").innerHTML =  "votos validos: " + nulos_porcentual+"%";
    document.getElementById("votos_n").innerHTML = "votos nulos: " + validos_porcentual+"%";
    
})


