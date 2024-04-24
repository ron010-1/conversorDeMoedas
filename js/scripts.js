//Carregando as opções para fazer a conversão.
document.addEventListener("DOMContentLoaded", function (event) {
    carregarOpcoes("caixaMoedasEsquerda");
    carregarOpcoes("caixaMoedasDireita");
});


//Função pra fazer requisições na API.
async function fetchData() {

    event.preventDefault();

    let selectEsquerda = document.getElementById("caixaMoedasEsquerda").value;
    let selectDireita = document.getElementById("caixaMoedasDireita").value;

    const response = await fetch(`https://economia.awesomeapi.com.br/${selectEsquerda}${"-"}${selectDireita}`);
    if(!response.ok){
        window.alert("Por favor, verifique as moedas, caso esteja tudo certo, as moedas inseridas não possui conversão.")
    }//Capturando um erro de requisição da API.
    const data = await response.json();

    //Pegando a taxa de conversão.
    const taxaConversao = data[0].ask;

    conversao(Number(taxaConversao).toFixed(2), selectEsquerda, selectDireita);
}

//Carregando todas as opções de moedas da pasta configs.
function carregarOpcoes(id) {
    // URL do arquivo com as opções
    const url = '/configs/siglasMoedas.xml';

    // Carrega o conteúdo de opcoes.xml
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Cria um objeto DOM a partir do XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');

            // Obtém todos os elementos <option> do XML
            const options = xmlDoc.getElementsByTagName('option');

            // Cria e preenche o elemento select com as opções
            const select = document.getElementById(id);
            for (let i = 0; i < options.length; i++) {
                const option = document.createElement('option');
                option.value = options[i].getAttribute('value');
                option.textContent = options[i].textContent;
                select.appendChild(option);
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar as opções:', error);
        });
}

function conversao(taxaConversao, moedaEsquerda, moedaDireita){

    let valorUsuario = Number(document.getElementById("valor").value);
    if(valorUsuario == 0){
        valorUsuario = 1;
    }
    let valorConvertido = valorUsuario * taxaConversao;

    adicionarNaDiv(taxaConversao, valorUsuario, valorConvertido.toFixed(2), moedaEsquerda, moedaDireita);

}

function adicionarNaDiv(taxaConversao, valorUsuario, valorConvertido, moedaEsquerda, moedaDireita){
    let pTaxa = document.getElementById("taxaDeConversao");
    let pValorUser = document.getElementById("valorParaConverter");

    pTaxa.innerHTML = `Essa é a taxa de conversão atual: 1 ${moedaEsquerda} é igual a ${taxaConversao} ${moedaDireita}`;
    pValorUser.innerHTML = `O valor ${valorUsuario} ${moedaEsquerda} na conversão é igual a ${valorConvertido} ${moedaDireita}`;

    let div = document.getElementById("dados");
    div.style.display = 'flex';
}
