const BASE_URL = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrency = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};
