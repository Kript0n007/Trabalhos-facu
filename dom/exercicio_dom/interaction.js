
let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

for(let i=0;  i < 5;  i++){

    let allfather = document.getElementById("sessaovenda");

    let box = document.createElement('div');
    let img = document.createElement('img');
    let nome = document.createElement('p');
    let preco = document.createElement('p');
    let descricao = document.createElement('p');

    img.src = ITENS_LOJA[i].url_img;
    nome.innerText = ITENS_LOJA[i].nome;
    preco.innerText = ITENS_LOJA[i].preco;
    descricao.innerText = ITENS_LOJA[i].descricao;

    allfather.appendChild(box);
    box.appendChild(img);
    box.appendChild(nome);
    box.appendChild(preco);
    box.appendChild(descricao);

}

for(let i=5;  i < 8;  i++){
   
    let allfather_1 = document.getElementById("sessaovenda_1");

    let box1 = document.createElement('div');
    let img1 = document.createElement('img');
    let nome1 = document.createElement('p');
    let preco1 = document.createElement('p');
    let descricao1 = document.createElement('p');

    img1.src = ITENS_LOJA[i].url_img;
    nome1.innerText = ITENS_LOJA[i].nome;
    preco1.innerText = ITENS_LOJA[i].preco;
    descricao1.innerText = ITENS_LOJA[i].descricao;

    allfather_1.appendChild(box1);
    box1.appendChild(img1);
    box1.appendChild(nome1);
    box1.appendChild(preco1);
    box1.appendChild(descricao1);

}