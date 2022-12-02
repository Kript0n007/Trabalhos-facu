
let Media_populaçao = document.getElementById("Media_populaçao").value;
let Media_filhos = document.getElementById("Media_filhos").value;
let Media_habitantes = document.getElementById("Media_habitantes").value;
let Media_salario = document.getElementById("Media_salario").value;

let contador_num=0;

function  cadPessoa(nome,filhos,Salario){
  
  filhos = Number(filhos);
  Salario = Number(Salario);
  
   let num;

    let tb = document.getElementById("tbPessoas");
    let qtlinhas = tb.rows.length;
    let linha = tb.insertRow(qtlinhas);

    for(i=1;  i< contador_num ;  i++){
        num = Salario;
    }

    if(nome == "" ){
      alert("Adicione um nome");
      console.log(contador_num);
      console.log(num);

    } else if(filhos < 0 || Salario <0){
          alert("Adicione um valor positivo");

    }else{

      let cellNome = linha.insertCell(0);
      let cellFilhos = linha.insertCell(1);
      let cellSalario = linha.insertCell(2);
      
      cellNome.innerHTML = nome;
      cellFilhos.innerHTML = Number(filhos);
      cellSalario.innerHTML = Number(Salario);

      contador_num++;
      
    }
}
