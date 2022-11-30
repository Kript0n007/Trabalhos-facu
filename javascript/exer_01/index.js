
let votos_brancos = null;
let votos_nulos = null;
let votos_validos = null;
let total_de_eleitores= null;
let brancos_porcentual = null;

votos_brancos = prompt("Digite a quantidade de votos em branco");
votos_nulos = prompt("Digite a quantidade de votos nulos");
votos_validos = prompt("Digite a quantidade de votos validos");

total_de_eleitores = Number(votos_brancos) + Number(votos_nulos) + Number(votos_validos);
brancos_porcentual = 100*(votos_brancos/total_de_eleitores).toFixed(2);
nulos_porcentual = 100*(votos_nulos/total_de_eleitores).toFixed(2);
validos_porcentual = 100*(votos_validos/total_de_eleitores).toFixed(2);


alert(`Votos em Branco representa ${brancos_porcentual}% do total de votos ${total_de_eleitores}` );
alert(`Votos em Nulo representa ${nulos_porcentual}% do total de votos ${total_de_eleitores}` );
alert(`Votos em Valido representa ${validos_porcentual}% do total de votos ${total_de_eleitores}` );
