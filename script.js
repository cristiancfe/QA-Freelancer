const botao = document.getElementById("btnSaibaMais");

if (botao) {
    botao.addEventListener("click", () => {
        window.location.href = "./saibamais.html";
    });
}

const botao2 = document.getElementById("btnVoltar");

if (botao2) {
    botao2.addEventListener("click", () => {
        window.location.href = "./index.html";
    });
}

const form = document.getElementById("formContato");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Mensagem enviada com sucesso!");

        this.reset();

    });

}

async function buscarCEP(){

    const cep = document
        .getElementById("cep")
        .value
        .replace(/\D/g, "");

    if(cep.length != 8){

        alert("Digite um CEP válido.");

        return;

    }

    try{

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const dados = await resposta.json();

        if(dados.erro){

            alert("CEP não encontrado.");

            return;

        }

        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

    }catch{

        alert("Erro ao consultar o CEP.");

    }

}