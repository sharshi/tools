// n is what percent of k?
export const aIsPercentageOfB = (a: number, b: number) => {
  if (a === 0 || b === 0) return 0;

  return (a * 100) / b;
};

// What is n% of k?
export const aPercentOfB = (a: number, b: number) => {
  if (a === 0 || b === 0) return 0;
  
  return (a / b) * 100;
};

// What is the percentage increase / decrease from n to k?
export const aPercentageChangeFromB = (a: number, b: number): string => {
  if (a === 0 || b === 0) return 'unable to calculate';

  const result = ((a - b) / b) * 100;

  return `${result}%`;
};
