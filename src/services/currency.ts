const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

// A tradução de Currency é Moeda
export const getCurrency = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};
