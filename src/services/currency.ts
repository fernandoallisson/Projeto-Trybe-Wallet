const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

// A tradução de Currency é Moeda
export const getCurrency = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const filteredData = Object.keys(data);
  return filteredData.filter((currency) => currency !== 'BRLT');
};

export const getCurrencyExchange = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};
