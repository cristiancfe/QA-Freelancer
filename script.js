const botao = document.getElementById("btnSaibaMais");

botao.addEventListener("click", ()=>{

alert("Obrigado pelo interesse! Em breve entraremos em contato.");

});

document
.getElementById("formContato")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Mensagem enviada com sucesso!");

this.reset();

});

async function buscarCEP(){

const cep=document.getElementById("cep").value;

if(cep==""){

return;

}

const resposta=await fetch(`https://viacep.com.br/ws/${cep}/json/`);

const dados=await resposta.json();

document.getElementById("resultadoCep").innerHTML=`

<p><strong>Rua:</strong> ${dados.logradouro}</p>

<p><strong>Bairro:</strong> ${dados.bairro}</p>

<p><strong>Cidade:</strong> ${dados.localidade}</p>

<p><strong>Estado:</strong> ${dados.uf}</p>

`;

}