// Função para formatar datas
export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

// Função para capitalizar a primeira letra de uma string
export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Função para calcular a média de um array de números
export const calculateAverage = (numbers: number[]): number => {
  const total = numbers.reduce((acc, number) => acc + number, 0);
  return total / numbers.length;
};
