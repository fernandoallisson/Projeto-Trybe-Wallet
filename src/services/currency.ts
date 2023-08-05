const BASE_URL = 'https://api.exchangeratesapi.io/latest';

export const getCurrency = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};
