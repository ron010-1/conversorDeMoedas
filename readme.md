# Conversor de Moedas

## API
Abaixo está o link da documentação da API que foi utilizada no projeto.
- https://docs.awesomeapi.com.br/api-de-moedas

### Exemplo de uso da API

- Quero a conversão de USD (Dólar) para BRL (Real Brasileiro).

Ok, ponto principal é que na API as moedas estão selecionadas pelas suas respectivas siglas, Dólar-USD e Real-BRL. 
No endpoint usaremos o seguinte link(Utilizando o Template String): 
<code>await fetch(`https://economia.awesomeapi.com.br/${USD}${"-"}${BRL}`);</code>

A api retornará o seguinte Array de Objeto:
<code>
[
  {
    "code": "USD",
    "codein": "BRL",
    "name": "Dólar Americano/Real Brasileiro",
    "high": "5.1322",
    "low": "5.1258",
    "varBid": "0.0062",
    "pctChange": "0.12",
    "bid": "5.1318",
    "ask": "5.1327",
    "timestamp": "1713907801",
    "create_date": "2024-04-23 18:30:01"
  }
]
</code>

O atributo que é utilizado para fazer a conversão é o "ask", lembrando de que se trata de um array de Objetos, então pra pegar o valor é data[0].ask.
No meu código há um exemplo na prática, assim você pode acompanhar melhor.

## Como Utilizar

Caso queira, insira o valor e selecione a moeda de origem e após selecione a moeda que deseje converter.
Clique em Converter e aparecerá os valores abaixo das caixas de seleção.

## Desenvolvedor

Riquelme Oliveira, 24/04/2024.

