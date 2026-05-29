// Vamos fazer um serviço que ordena moedas em relação delas para com o real.

export { };

type exchangeRateResponse = {
    [currency: string]: number;
}

class CurrencyService {
    private apiUrl = "https://open.er-api.com/v6/latest/BRL"

    // busca dados da API
    async fetchRates(): Promise<exchangeRateResponse> { // promise é uma promessa de que a função vai retornar algo. Mas não sabemos quando vai retornar.
        const response = await fetch(this.apiUrl);
        if (!response.ok) { // o "!" quer dizer "não". Então, se a resposta não for ok, vai lançar um erro. 
            throw new Error(`Erro ao buscar API: ${response.status}`)
        }
        const data = await response.json(); // o ".json()" serve para converter a resposta da API para JSON.
        return data.rates
    }

    // filtra e ordena as moedas mais valorizadas
    async topCurrencies(limit = 5): Promise<{ moeda: string; valor: number }[]> { // o "[]" vazio indica que a função vai retornar um array de objetos. Os "{}" indicam que é um objeto.
        const rates = await this.fetchRates(); // o "this" é uma referencia a classe. "fetchRates" é uma função que vai retornar um objeto.

        const pares = Object.entries(rates).map(([moeda, valor]) => ({
            moeda,
            valor
        }));

        // ordenar da mais valorizada para menos valorizada
        const ordenados = pares.sort((a, b) => a.valor - b.valor)

        return ordenados.slice(0, limit)
    }
}

// Vamos criar uma função main para testar o serviço
async function main() {
    const service = new CurrencyService()

    try {
        console.log("Buscando moedas mais valorizadas...");
        const top = await service.topCurrencies(5)
        console.log("Top 5 moedas em relação ao Real:");
        top.forEach(item => console.log(`${item.moeda}: ${item.valor}`));
    } catch (error) {
        console.error("Erro ao buscar moedas:", error);
    }
} main()

/*
* Explicando linha por linha do código desde o começo:

? type exchangeRateResponse = { //! type é usado para criar um tipo / aqui estamos dizendo que a variável exchangeRateResponse vai receber um objeto que tem como chave uma string e como valor um número

?    [currency: string]: number; //! [currency: string] quer dizer que qualquer coisa que seja string vai receber um número. Ex: moedas.
? }


? class CurrencyService { //! class é usado para criar um objeto / aqui estamos dizendo que a classe CurrencyService vai receber um objeto que tem como chave uma string e como valor um número

?    private apiUrl = "https://open.er-api.com/v6/latest/USD" //! private quer dizer que a variável só pode ser acessada dentro da classe

* Busca de dados na API / com promisse *

? async fetchRates(): Promise<exchangeRateResponse> { //! async quer dizer que a função vai retornar uma promessa chamada "fetchRates" / Promise é uma promessa de que a função vai retornar algo, 
?                                                     //! mas não sabemos quando vai retornar / abrir e fechar um "< >" quer dizer "retorna esse tipo" / exchangeRateResponse é o tipo que vai retornar 

?        const response = await fetch(this.apiUrl); //! const response quer dizer que estamos declarando uma variável chamada response / await quer dizer que a função vai esperar algo acontecer para continuar
?                                                   //! fetch é uma função que vai buscar dados na API / "this." quer dizer "essa propriedade" dentro da classe "this", ou seja, this.apiUrl, declara lá em cima.

?        if (!response.ok) { //! if (!response.ok) quer dizer "se a resposta não for ok"... / o "!" quer dizer "não" e "ok" é uma função que verifica se a resposta é ok

?            throw new Error(`Erro ao buscar API: ${response.status}`) //! throw new Error() é usado para lançar um erro genérico / o "`" serve para interpolar variáveis na string /
?        }                                                             //! o "${}" serve para interpolar variáveis na string (se não tudo na string seria apenas uma string)...
?                                                                      //! response.status quer dizer "o status da resposta". 

?        const data = await response.json(); // o ".json()" serve para converter a resposta da API para JSON. //! const data é declaração de variável / await vai esperar algo acontecer para continuar /
?                                                                                                             //! "response." é o objeto que foi buscar na API / "response.json" é uma função que vai converter
?                                                                                                             //! a resposta da API para JSON.

?        return data.rates //! "return" serve para retornar algo / "data." é a variável declarada a cima / então "data.rates" é a variável "data" acessando a propriedade "rates". / "rates" ainda não foi 
?                          //! declarado, está sendo apenas acessado (mesmo antes da declaração).
?    }

* Filtrando e ordenando moedas mais valorizadas *

? async topCurrencies(limit = 5): Promise<{ moeda: string; valor: number }[]> { //! async é uma promessa / o "(limite = 5)" só quer dizer que se não for passado nada na função, o limite vai ser 5. /
?                                                                               //! o ":" quer dizer "retorna esse tipo" / o "Promise" é uma promessa de que a função vai retornar algo /
?                                                                               //! os "<>" é só uma questão de estrutura / o "{moeda: string; valor: number}[]" quer dizer que a função vai retornar
?                                                                               //! um array de objetos que tem como chave "moeda" (string) e "valor" (number).

?        const rates = await this.fetchRates(); //! const rates é declaração de variável / await vai esperar algo acontecer para continuar / "this." é a propriedade "apiUrl" da classe /
?                                               //! então "this.fetchRates()" está dizendo que vai acessar a propriedade "fetchRates" da classe "this" que é uma função, então tem que colocar "()" no final.

?        const pares = Object.entries(rates).map(([moeda, valor]) => ({ //! "Object.entries()" é uma função que vai retornar um array de objetos / ".map()" vai retornar um array de objetos também /
?                                                                       //! o "=>" significa "vai retornar" um objeto (definido logo em seguida / os "({ })" é uma questão de sintaxe para retornar um objeto)

?            moeda, //! "moeda" é a chave do objeto / "valor" é o valor do objeto / é uma forma de desestruturar o objeto

?            valor //! também serviria se fosse assim: "const pares = Object.entries(rates).map(([moeda, valor]) => ({moeda, valor}));" e daria na mesma.
?        }));
? 
?         // ordenar da mais valorizada para menos valorizada
?         const ordenados = pares.sort((a, b) => a.valor - b.valor) //! "pares" é a variável declarada a cima / ".sort()" é uma função que retorna um array de objetos ordenados /
?                                                                   //! "((a, b)" quer dizer que a função vai receber dois objetos como parâmetro / o "=> a.valor - b.valor" quer dizer que
?                                                                   //! se o valor de "a" for menos que o valor de "b", então "a" vem primeiro, senão "b" vem primeiro. 
?                                                                   //! Isso é uma forma de ordenar o array em ordem crescente.
? 
?         return ordenados.slice(0, limit) //! quer dizer que vai retornar os objetos de "pares" ordenados em ordem crescente, pegando apenas os "limit" primeiros.
?     }
? }

* Vamos criar uma função main para testar o serviço *

? async function main() { //! aqui ja vimos um milhão de vezes... vai retornar uma promessa que será uma função com o nome "main()"

?    const service = new CurrencyService() //! aqui estamos criando um objeto chamado "service" que é uma instância da classe "CurrencyService"

?    try { //! try é usado para tentar executar um código e, se der erro, executar o catch

?        console.log("Buscando moedas mais valorizadas..."); //! vai imprimir "Buscando moedas mais valorizadas..."

?        const top = await service.topCurrencies(5) //! declaração da variável "top" que vai receber o retorno da função "topCurrencies(5)" / o await diz que vai esperar a função
?                                                   //! "topCurrencies(5)" terminar de executar antes de continuar

?        console.log("Top 5 moedas em relação ao Dólar:");

?        top.forEach(item => console.log(`${item.moeda}: ${item.valor}`)); //! "top." é a variável "top" que foi declarada a cima / 
?                                                                          //! ".forEach()" é uma função que vai percorrer o array "top" e executar uma função para cada item / 
?                                                                          //! "(item => ...)" é uma função que vai receber cada item do array "top" como parâmetro / 
?                                                                          //! "`${item.moeda}: ${item.valor}`" é uma string que vai receber o valor de cada item do array "top".
?    } catch (error) { //! catch é usado para capturar erros que ocorreram no try

?        console.error("Erro ao buscar moedas:", error); //! "console.error" é usado para imprimir erros no console. / "Erro ao buscar moedas:" é uma string /
?                                                        //! "error" é a variável que vai receber o erro capturado pelo catch, ou seja, erro do try.
?    }
? }
? main() //! aqui estamos chamando a função main() para executar todo o código acima, desde do "const currencyService" até o catch.
*/