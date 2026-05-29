// 0.3-typescript.ts
class CurrencyService {
  apiUrl = "https://open.er-api.com/v6/latest/BRL";
  async fetchRates() {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error(`Erro ao buscar API: ${response.status}`);
    }
    const data = await response.json();
    return data.rates;
  }
  async topCurrencies(limit = 5) {
    const rates = await this.fetchRates();
    const pares = Object.entries(rates).map(([moeda, valor]) => ({
      moeda,
      valor
    }));
    const ordenados = pares.sort((a, b) => a.valor - b.valor);
    return ordenados.slice(0, limit);
  }
}
async function main() {
  const service = new CurrencyService;
  try {
    console.log("Buscando moedas mais valorizadas...");
    const top = await service.topCurrencies(5);
    console.log("Top 5 moedas em relação ao Real:");
    top.forEach((item) => console.log(`${item.moeda}: ${item.valor}`));
  } catch (error) {
    console.error("Erro ao buscar moedas:", error);
  }
}
main();
