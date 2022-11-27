
  var heading = document.createElement("h1");
  var heading_text = document.createTextNode("Big Head!");
  heading.appendChild(heading_text);
  document.body.appendChild(heading);



function  cadPessoa(nome, sobrenome, email, altura, sexo){

    let tb = document.getElementById("tbPessoas");
    let qtlinhas = tb.rows.length;
    let linha = tb.insertRow(qtlinhas);

    let cellId = linha.insertCell(0);
    let cellNome = linha.insertCell(1);
    let cellSobrenome = linha.insertCell(2);
    let cellEmail = linha.insertCell(3);
    let cellAltura = linha.insertCell(4);
    let cellSexo = linha.insertCell(5);

    cellId.innerHTML = qtlinhas;
    cellNome.innerHTML = nome;
    cellSobrenome.innerHTML = sobrenome;
    cellEmail.innerHTML = email;
    cellAltura.innerHTML = altura;
    cellSexo.innerHTML =sexo;

}
